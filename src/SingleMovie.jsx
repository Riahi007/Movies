import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SingleMovie() {
    const param = useParams(); 
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate(); 

    const fetchMovie = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/movies/${param.id}`); 
            setMovie(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [param.id]);

    return (
        <div className='SingMovie'>
            {movie ? (
                <div className='movie-details'>
                    <h1>{movie.title}</h1>
                    <img src={movie.image} alt={movie.title} />
                    <p>{movie.description}</p>
                    <p>Rating: {movie.rating}</p>
                    <button onClick={() => navigate('/')}>Back to Home</button>
                </div>
            ) : (
                <p>Loading movie details...</p> 
            )}
        </div>
    );
}

export default SingleMovie;
