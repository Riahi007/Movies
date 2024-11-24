import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
    const [movie, setMovie] = useState({
        title: "",
        image: "",
        description: "",
        category: "",
        rating: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prev) => ({ ...prev, [name]: value }));
    };

    const addNewMovie = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/movies", movie);
            navigate('/'); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={addNewMovie}>
                <input type="text" placeholder='Title' name='title' value={movie.title} onChange={handleChange} /><br />
                <input type="text" placeholder='Image URL' name='image' value={movie.image} onChange={handleChange}  /><br />
                <input  type="text"  placeholder='Description'  name='description'  value={movie.description}  onChange={handleChange}  /><br />
                <input type="text" placeholder='Category' name='category' value={movie.category} onChange={handleChange}  /><br />
                <input type="text" placeholder='Rating' name='rating' value={movie.rating} onChange={handleChange} /><br />
                <input type="submit" value="Add New Movie" />
            </form>
        </div>
    );
}

export default AddMovie;
