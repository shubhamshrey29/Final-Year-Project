import React, { useEffect, useState } from 'react';
import './nashik.css';
import { Link } from 'react-router-dom';

const Nashik = () => {
    const [cityData, setCityData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const response = await fetch('http://localhost:8000/cities/city/Nashik');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCityData(data.map(city => ({ id: city.id, title: city.title, url: city.url })));
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCityData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='list'>
            <h1>List of colleges in Nashik</h1>
            {cityData.map((city, index) => (
                <div className='list_segment' key={index}>
                    <Link to={`/city/${city.id}`}>
                        <img src={city.url} alt={city.title} />
                        <p>{city.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Nashik;
