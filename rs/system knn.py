import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

cv = CountVectorizer(max_features=60)

universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')

universities['nirf_rank'] = universities['nirf_rank'].astype(str).apply(lambda x: [x])
universities['institution'] = universities['institution'].astype(str).apply(lambda x: [x])
universities['state'] = universities['state'].astype(str).apply(lambda x: [x])
universities['city'] = universities['city'].astype(str).apply(lambda x: [x])
universities['12th'] = universities['12th'].astype(str).apply(lambda x: [x])
universities['jee'] = universities['jee'].astype(str).apply(lambda x: [x])
universities['mhtcet'] = universities['mhtcet'].astype(str).apply(lambda x: [x])
universities['year'] = universities['year'].astype(str).apply(lambda x: [x])
universities['budget'] = universities['budget'].astype(str).apply(lambda x: [x])

universities['tags'] = universities['state'] + universities['city'] + \
                       universities['12th'] + universities['jee'] + universities['mhtcet'] + \
                       universities['year'] + universities['budget']

new_df = universities[['nirf_rank', 'institution', 'tags']]

new_df.loc[:, 'tags'] = new_df['tags'].apply(lambda x: " ".join(x))
new_df.loc[:, 'tags'] = new_df['tags'].apply(lambda x: x.lower())

# Fit the CountVectorizer and transform the tags
vectors = cv.fit_transform(new_df['tags']).toarray()

# Standardize the vectors
scaler = StandardScaler()
vectors_standardized = scaler.fit_transform(vectors)

# Train KNN model
knn_model = KNeighborsClassifier(n_neighbors=5, metric='cosine')
knn_model.fit(vectors_standardized, new_df.index)

def recommend(user_input):
    # Extract user input
    user_state = user_input['state'].lower().strip()
    user_city = user_input['city'].lower().strip()
    user_jee = float(user_input['jee'])
    user_mhtcet = float(user_input['mhtcet'])
    
    # Create user tags
    user_tags = [user_state, user_city, str(user_jee), str(user_mhtcet)]
    user_tags += [''] * (len(vectors[0]) - len(user_tags))  # Pad with empty strings to match vector length
    user_tags_str = " ".join(user_tags).lower()

    # Transform user input using the CountVectorizer
    user_vector = cv.transform([user_tags_str]).toarray()

    # Standardize the user vector
    user_vector_standardized = scaler.transform(user_vector)

    # Use KNN model to find similar universities
    distances, indices = knn_model.kneighbors(user_vector_standardized)

    print(f"Top 3 recommendations for your preferences:")
    for i in indices[0][1:4]:
        recommended_university = new_df.iloc[i]['institution'][0]
        print(recommended_university)

# Example user input (modify this based on how you collect user input)
user_input = {'state': 'maharashtra', 'city': 'pune', 'jee': 89.7342, 'mhtcet': 80.923}

# Get recommendations based on user input
recommend(user_input)
