import React,{useEffect, useState} from 'react';
import axios from "axios"
import MovieCard from "../utils/MovieCard";
const Latest = () => {
    const [latestFilms,setLatestFilms] = useState([])
    const [counter,setCounter] = useState(0)
    useEffect(() =>{
        axios("https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1")
            .then(({data}) => setLatestFilms(data.results))
    },[])
    return (
        <div className="container">
<h1 className="h1">Latest Films</h1>


            <div className="row">{
                latestFilms.map(el =>(
                    <div className="col-3 my-4" key={el.id}>
                        <div className="bigimg">
                            {/*<img  className="img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>*/}
                            <MovieCard  className="img"  el={el} key={el.id}/>
                        </div>
                        <div>
                            <p className="title">{el.title}</p>
                        </div>
                    </div>
                ))
            }

            </div>
        </div>
    );
};

export default Latest;