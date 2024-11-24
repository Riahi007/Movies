import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const param=useParams()

    const fetchMovies = async () => {
        try {
            const res = await axios.get("http://localhost:3000/movies");
            setMovies(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory ? movie.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const truncateDescription = (description) => {
      const words = description.split(' ');
      if (words.length > 20) {
          return words.slice(0, 15).join(' ') + '...';
      }
      return description;
  };

    return (
        <div>
            <form action="">
              <div className='search'>
                <input className='searchInput'  type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                <select  className="selectInput" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
                    <option value="" className='ALL'><p className='ALL'>All Categories</p></option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Crime">Crime</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Historical">Historical</option>
                    <option value="War">War</option>
                    <option value="Biography">Biography</option>
                    <option value="Animation">Animation</option>
                    <option value="Adventure">Adventure</option>
                </select>
                </div>
            </form>
            <div className='MovieContainaire'>
                {filteredMovies.map(movie => (
                    <div className='container' key={movie.id}>
                     
                        <p>{movie.title}</p>
                        <Link to={'/movies/'+movie.id}>  <img src={movie.image} alt="" /></Link>
                        <p>{truncateDescription(movie.description)}</p>
                        <p>{movie.category}</p>
                        <p>{movie.rating}</p>
        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
