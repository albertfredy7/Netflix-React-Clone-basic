import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Row({title,fetchURL,isPoster}) {
    const [allMovies,setAllMovies]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    // console.log(fetchURL);

    const fetchData = async() =>{
        const {data} = await instance.get(fetchURL)
        setAllMovies(data.results)
        
        // console.log(data.results);
    }
    console.log(allMovies);

    useEffect(()=>{
      fetchData()
    },[])
    
  return (
    <div className='row'>
      {title}
      <div className="movie_row">
        {
          allMovies?.map(item=>(
            <img className={`${isPoster && `movie-poster`} movies`} src={`${base_url}${isPoster?item?.poster_path:item.backdrop_path}`} />
          ))
        }
        
      </div>
    </div>
  )
}

export default Row