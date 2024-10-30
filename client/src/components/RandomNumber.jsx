import React, { useState, useEffect } from 'react';

const RandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const fetchRandomNumber = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/random-number");
            const data = await response.json();
            setRandomNumber(data.random_number);
        } catch (error) {
            console.error("Error fetching random number:", error);
        }
    };

    useEffect(() => {
        fetchRandomNumber();
    }, []);

    return (
        <div>
            <h1>Random Number from FastAPI</h1>
            {randomNumber !== null ? (
                <p>The random number is: {randomNumber}</p>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={fetchRandomNumber}>Get New Random Number</button>
        </div>
    );
};

export default RandomNumber;
