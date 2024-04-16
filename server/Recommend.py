import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import accuracy_score
import pymongo

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://jiya:qufV1pqPJ1fWndPS@cluster0.fziglo8.mongodb.net/home?retryWrites=true&w=majority")
db = client["home"]
collection = db["users"]

# Query the database to find the user's data
user_data = collection.find_one({})

# Data preprocessing (similar to your existing code)
universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')

universities['tags'] = universities[['state', 'city', '12th', 'jee', 'mhtcet', 'year', 'score']].apply(lambda x: ' '.join(map(str, x)), axis=1)
universities['tags'] = universities['tags'].str.lower()

X = universities['tags']
y = universities.index

cv = CountVectorizer(max_features=60)

vectors = cv.fit_transform(X)

scaler = MinMaxScaler()
vectors_standardized = scaler.fit_transform(vectors.toarray())

nb_model = MultinomialNB()
nb_model.fit(vectors_standardized, y)

# Handle None value for 'mhtcetresult' field
mhtcet_result = user_data.get('mhtcetresult')
if mhtcet_result is not None:
    mhtcet = float(mhtcet_result)
else:
    mhtcet = 0

# Prepare user input
user_input = {
    'state': user_data['statepreference'].lower(),  # Map 'statepreference' field to 'state'
    'city': user_data.get('city'),  # Map 'city' field, might be None
    'jee': float(user_data['jeepercentile']),  # Map 'jeepercentile' field to 'jee'
    'mhtcet': mhtcet,  # Use the mhtcet value determined above
}

def recommend(user_input, cv, scaler, nb_model, universities):
    user_state = user_input['state'].lower().strip()
    user_city = user_input['city']  # Assume 'city' field can be None
    
    # Ensure user_city is converted to a string, even if it's None
    user_city = str(user_city) if user_city is not None else None
    
    user_jee = float(user_input['jee'])
    user_mhtcet = float(user_input['mhtcet'])
    
    user_tags = ' '.join([user_state, str(user_city), str(user_jee), str(user_mhtcet)]).lower()

    user_vector = cv.transform([user_tags])
    user_vector_standardized = scaler.transform(user_vector.toarray())

    predicted_probabilities = nb_model.predict_proba(user_vector_standardized)[0]
    top_indices = np.argsort(predicted_probabilities)[-3:][::-1]

    recommended_institutions = [universities.iloc[index]['institution'] for index in top_indices]
    return recommended_institutions

def calculate_accuracy(nb_model, vectors_standardized, universities):
    predicted_labels = nb_model.predict(vectors_standardized)
    accuracy = accuracy_score(universities.index, predicted_labels)
    return accuracy

recommendations = recommend(user_input, cv, scaler, nb_model, universities)

print("Top 3 recommendations for your preferences:")
for recommendation in recommendations:
    print(recommendation)

accuracy = calculate_accuracy(nb_model, vectors_standardized, universities)
print(f"Accuracy: {accuracy}")
