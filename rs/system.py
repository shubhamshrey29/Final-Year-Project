import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

cv = CountVectorizer(max_features=23)

universities = pd.read_excel(r'F:\GitHub\Final-Year-Project\rs\dataset.xlsx')

# Converting strings/float to list for tags
universities['nirf_rank'] = universities['nirf_rank'].astype(str).apply(lambda x: [x])
universities['institution'] = universities['institution'].astype(str).apply(lambda x: [x])
universities['state'] = universities['state'].astype(str).apply(lambda x: [x])
universities['city'] = universities['city'].astype(str).apply(lambda x: [x])
universities['score'] = universities['score'].astype(str).apply(lambda x: [x])
universities['12th'] = universities['12th'].astype(str).apply(lambda x: [x])
universities['jee'] = universities['jee'].astype(str).apply(lambda x: [x])
universities['mhtcet'] = universities['mhtcet'].astype(str).apply(lambda x: [x])
universities['year'] = universities['year'].astype(str).apply(lambda x: [x])
universities['budget'] = universities['budget'].astype(str).apply(lambda x: [x])

# Create tags column
universities['tags'] = universities['state'] + universities['city'] + universities['score'] + \
                       universities['12th'] + universities['jee'] + universities['mhtcet'] + \
                       universities['year'] + universities['budget']

#universities['institution'] = universities['institution'].apply(lambda x: [i.replace(' ','') for i in x])

# Select relevant columns
new_df = universities[['nirf_rank', 'institution', 'tags']]

# Apply transformations using .loc to avoid the SettingWithCopyWarning
new_df.loc[:, 'tags'] = new_df['tags'].apply(lambda x: " ".join(x))
new_df.loc[:, 'tags'] = new_df['tags'].apply(lambda x: x.lower())

# Fit the CountVectorizer and calculate cosine similarity
vectors = cv.fit_transform(new_df['tags']).toarray()
similarity = cosine_similarity(vectors)

# Recommend function
def recommend(university):
    # Convert the provided university name to lowercase
    university = university.lower().strip()
    
    # Check if the modified name is in the dataset
    if university not in new_df['institution'].apply(lambda x: x[0].lower().strip()).tolist():
        print(f"University '{university}' not found in the dataset.")
        return
    
    university_index = new_df[new_df['institution'].apply(lambda x: x[0].lower().strip()) == university].index[0]
    distances = sorted(list(enumerate(similarity[university_index])), reverse=True, key=lambda x: x[1])
    
    # Print the top 3 recommendations with only the institution names
    print(f"Top 3 recommendations for '{university}':")
    for i in distances[1:4]:
        recommended_university = new_df.iloc[i[0]]['institution'][0]
        print(recommended_university)

recommend('Army Institute of Technology')



#print(universities[['nirf_rank', 'institution', 'tags']])

