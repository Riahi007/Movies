import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateMovie() {
    const param = useParams();
    const [movie, setMovie] = useState({ title: '', category: '', rating: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/movies/${param.id}`);
                setMovie(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, [param.id]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/movies/${param.id}`, movie);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
                <div className="UpdateMovie">
            <h1>Update Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text"  name="title"  value={movie.title} onChange={handleChange}  required  />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={movie.category} onChange={handleChange}  required  />
                </div>
                <div>
                    <label>Rating:</label>
                    <input   type="number"   name="rating"   value={movie.rating}   onChange={handleChange} required />
                </div>
                <button type="submit">Update Movie</button>
            </form>
        </div>
        </div>
    );
}

export default UpdateMovie;
