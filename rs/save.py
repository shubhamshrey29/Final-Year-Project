import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

# Load dataset
universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')

# Preprocess data
universities['nirf_rank'] = universities['nirf_rank'].astype(str)
universities['institution'] = universities['institution'].astype(str)
universities['state'] = universities['state'].astype(str)
universities['city'] = universities['city'].astype(str)
universities['12th'] = universities['12th'].astype(str)
universities['jee'] = universities['jee'].astype(str)
universities['mhtcet'] = universities['mhtcet'].astype(str)
universities['year'] = universities['year'].astype(str)
universities['score'] = universities['score'].astype(str)

universities['tags'] = universities['state'] + ' ' + universities['city'] + ' ' + \
                       universities['12th'] + ' ' + universities['jee'] + ' ' + universities['mhtcet'] + ' ' + \
                       universities['year'] + ' ' + universities['score']

# Initialize CountVectorizer
cv = CountVectorizer(max_features=60)

# Transform tags into vectors
vectors = cv.fit_transform(universities['tags']).toarray()

# Standardize feature vectors
scaler = StandardScaler()
vectors_standardized = scaler.fit_transform(vectors)

# Train and evaluate different classifiers
classifiers = {
    "KNN": KNeighborsClassifier(n_neighbors=5, metric='cosine'),
    "Decision Tree": DecisionTreeClassifier(),
    "Random Forest": RandomForestClassifier(),
    "SVM": SVC(),
    "Logistic Regression": LogisticRegression()
}

def recommend(user_input):
    # Preprocess user input
    user_state = user_input['state'].lower().strip()
    user_city = user_input['city'].lower().strip()
    user_jee = float(user_input['jee'])
    user_mhtcet = float(user_input['mhtcet'])

    # Create tag string with priority to state and city
    user_tags = [user_state, user_city, str(user_jee), str(user_mhtcet), '', '', '']
    user_tags_str = " ".join(user_tags).lower()

    # Transform user input into vector
    user_vector = cv.transform([user_tags_str]).toarray()
    user_vector_standardized = (user_vector - scaler.mean_) / np.sqrt(scaler.var_)

    print("Top 3 recommendations for your preferences:")
    for name, clf in classifiers.items():
        clf.fit(vectors_standardized, universities['institution'])
        if name == "KNN":
            distances, indices = clf.kneighbors(user_vector_standardized)
            recommended_universities = set()
            count = 0
            i = 0
            while count < 3 and i < len(indices[0]):
                index = indices[0][i]
                institution = universities.iloc[index]['institution']
                if institution not in recommended_universities:
                    print(f"{name}: {institution}")
                    recommended_universities.add(institution)
                    count += 1
                i += 1
        else:
            predicted_labels = clf.predict(user_vector_standardized)
            print(f"{name}: {predicted_labels[0]}")
    
        # Evaluate accuracy
        predicted_labels = clf.predict(vectors_standardized)
        accuracy = accuracy_score(universities['institution'], predicted_labels)
        print(f"{name} Accuracy: {accuracy}")

user_input = {'state': 'maharashtra', 'city': 'pune', 'jee': 90, 'mhtcet': 0}

recommend(user_input)
