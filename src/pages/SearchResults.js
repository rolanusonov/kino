import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Apikey} from "../utils/Apikey";
import {useParams} from "react-router-dom";
import MovieCard from "../utils/MovieCard";

const SearchResults = () => {
    const [result, setResult] = useState([])
    const {name} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${name}`)
            .then(({data}) => {
                try{
                    setResult(data.results)

                } catch (error){
                    console.log(error)
                } 
            })
    },[])
    console.log(result)

    return (
        <div className="container">
            <div className="row">
                {
                    result.map(el =>(
                        <MovieCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResults;