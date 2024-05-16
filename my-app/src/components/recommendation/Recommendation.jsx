// Recommendations.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Recommendations = () => {
    const { userId } = useParams();
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/recommendations/${userId}`);
                if (response.data.recommendations && response.data.recommendations.length > 0) {
                    setRecommendations(response.data.recommendations);
                } else {
                    setError('No recommendations found.');
                }
            } catch (error) {
                setError('Error fetching recommendations. Please try again later.');
            }
        };

        fetchRecommendations();
    }, [userId]);


    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h2>Recommendations for {userId}</h2>
                    <ul>
                        {recommendations.map((recommendation, index) => (
                            <li key={index}>{recommendation}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Recommendations;
