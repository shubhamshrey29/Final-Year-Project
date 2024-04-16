# Accuracy: 0.8045347928068803

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import accuracy_score

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

def recommend(user_input, cv, scaler, nb_model, universities):
    user_state = user_input['state'].lower().strip()
    user_city = user_input['city'].lower().strip()
    user_jee = float(user_input['jee'])
    user_mhtcet = float(user_input['mhtcet'])
    
    user_tags = ' '.join([user_state, user_city, str(user_jee), str(user_mhtcet)]).lower()

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

user_input = {'state': 'maharashtra', 'city': 'pune', 'jee': 85, 'mhtcet': 0}

recommendations = recommend(user_input, cv, scaler, nb_model, universities)

print("Top 3 recommendations for your preferences:")
for recommendation in recommendations:
    print(recommendation)

accuracy = calculate_accuracy(nb_model, vectors_standardized, universities)
print(f"Accuracy: {accuracy}")
