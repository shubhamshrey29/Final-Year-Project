# Accuracy: 0.8045347928068803

import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import accuracy_score

# Load dataset
universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')

# Preprocess data
universities['tags'] = universities[['state', 'city', '12th', 'jee', 'mhtcet', 'year', 'score']].apply(lambda x: ' '.join(map(str, x)), axis=1)
universities['tags'] = universities['tags'].str.lower()

# Split data into features and labels
X = universities['tags']
y = universities.index

# Initialize CountVectorizer
cv = CountVectorizer(max_features=60)

# Transform text data into numerical vectors
vectors = cv.fit_transform(X)

# Scale feature vectors
scaler = MinMaxScaler()
vectors_standardized = scaler.fit_transform(vectors.toarray())

# Train Naive Bayes model
nb_model = MultinomialNB()
nb_model.fit(vectors_standardized, y)

def recommend(user_input, cv, scaler, nb_model, universities):
    # Preprocess user input
    user_state = user_input['state'].lower().strip()
    user_city = user_input['city'].lower().strip()
    user_jee = float(user_input['jee'])
    user_mhtcet = float(user_input['mhtcet'])
    
    # Create user tags
    user_tags = ' '.join([user_state, user_city, str(user_jee), str(user_mhtcet)]).lower()

    # Transform user input into vector
    user_vector = cv.transform([user_tags])
    user_vector_standardized = scaler.transform(user_vector.toarray())

    # Predict probabilities
    predicted_probabilities = nb_model.predict_proba(user_vector_standardized)[0]
    top_indices = np.argsort(predicted_probabilities)[-3:][::-1]

    # Get recommended institutions
    recommended_institutions = [universities.iloc[index]['institution'] for index in top_indices]
    return recommended_institutions

def calculate_accuracy(nb_model, vectors_standardized, universities):
    # Predict labels
    predicted_labels = nb_model.predict(vectors_standardized)
    # Calculate accuracy
    accuracy = accuracy_score(universities.index, predicted_labels)
    return accuracy

# Sample user input
user_input = {'state': 'maharashtra', 'city': 'pune', 'jee': 85, 'mhtcet': 0}

# Get recommendations
recommendations = recommend(user_input, cv, scaler, nb_model, universities)

# Print recommendations
print("Top 3 recommendations for your preferences:")
for recommendation in recommendations:
    print(recommendation)

# Calculate and print accuracy
accuracy = calculate_accuracy(nb_model, vectors_standardized, universities)
print(f"Accuracy: {accuracy}")
