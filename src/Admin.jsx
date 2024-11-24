import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Admin() {
    const [movies, setMovies] = useState([]);
    const param=useParams()

    const fetchMovies = async () => {
        try {
            const res = await axios.get("http://localhost:3000/movies");
            setMovies(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/movies/${id}`);
            setMovies(movies.filter(movie => movie.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Admin Movie List</h1>
            <table className='movieTable'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating}</td>
                            <td>
                                 <Link to={'/update/'+movie.id} className="showMoreButton">Update</Link>
                            </td>
                            <td><button onClick={() => handleDelete(movie.id)} className="Delete">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
