import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import MinMaxScaler
import pymongo
import sys
import json
import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

def get_user_data(user_id, collection):
    return collection.find_one({"username": user_id})

def run_recommendation(user_id):

    # Read username and password from environment variables
    db_username = os.getenv('DB_USERNAME')
    db_password = os.getenv('DB_PASSWORD')
    # Connect to MongoDB
    client = pymongo.MongoClient(f"mongodb+srv://{db_username}:{db_password}@cluster0.fziglo8.mongodb.net/?retryWrites=true&w=majority")
    db = client["home"]
    collection = db["users"]

    # Retrieve user data from MongoDB
    user_data = get_user_data(user_id, collection)

    if user_data:
        # Read universities data from Excel file
        universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')
        universities['tags'] = universities[['state', 'city', '12th', 'jee', 'mhtcet', 'year', 'score']].apply(lambda x: ' '.join(map(str, x)), axis=1)
        universities['tags'] = universities['tags'].str.lower()

        X = universities['tags']
        y = universities.index

        cv = CountVectorizer(max_features=60)
        vectors = cv.fit_transform(X)

        scaler = MinMaxScaler()
        vectors_standardized = scaler.fit_transform(vectors.toarray())

        mhtcet_result = float(user_data.get('mhtcetresult', 0)) if user_data.get('mhtcetresult') is not None else 0
        user_input = {
            'state': user_data.get('statepreference', '').lower(),
            'city': user_data.get('citypreference', '').lower(),
            'jee': float(user_data.get('jeepercentile', 0)),
            'mhtcet': mhtcet_result,
        }

        nb_model = MultinomialNB()
        nb_model.fit(vectors_standardized, y)

        # Define recommendation function
        def recommend(user_input, cv, scaler, nb_model, universities, recommended_so_far=[]):
            user_state = user_input['state'].lower().strip()
            user_city = user_input['city'].lower().strip()

            user_jee = float(user_input['jee'])
            user_mhtcet = float(user_input['mhtcet'])

            state_weight = 5
            city_weight = 3

            user_tags = ' '.join([state_weight * user_state, city_weight * user_city, str(user_jee), str(user_mhtcet)]).lower()

            user_vector = cv.transform([user_tags])
            user_vector_standardized = scaler.transform(user_vector.toarray())

            predicted_probabilities = nb_model.predict_proba(user_vector_standardized)[0]
            top_indices = np.argsort(predicted_probabilities)[::-1] # Sort in descending order
            recommended_institutions = []
            for index in top_indices:
                original_institution = universities.iloc[index]['institution']
                institution = original_institution.lower().strip()
                state = universities.iloc[index]['state'].lower().strip() 
                if institution not in recommended_so_far and state == 'maharashtra':
                    recommended_institutions.append(original_institution)
                    recommended_so_far.append(institution)

                if len(recommended_institutions) == 3:
                    break

            return recommended_institutions

        recommendations = recommend(user_input, cv, scaler, nb_model, universities)

        return recommendations
    else:
        return []

if __name__ == "__main__":
    user_id = sys.argv[1]
    print(f'user_id in Python script: {user_id}', file=sys.stderr)
    recommendations = run_recommendation(user_id)

    print(json.dumps(recommendations))
