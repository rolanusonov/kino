import React,{useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Apikey} from "../utils/Apikey"
import ActorsPage from "./ActorsPage";
import VideoPage from "./VideoPage";
const MovieDetals = () => {
    const {movieId} = useParams()
    const [detals, setDetals] = useState({})
const [video, setVideo] = useState([])
    const {
        backdrop_path,
        title,
        original_title,
        poster_path,
        overview,
        budget,
        release_date,
        runtime,
        status,

    }= detals
    useEffect( ()=>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=ru-RU`)
            .then(({data}) => setDetals(data))
axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Apikey}&language=en-US`)
    .then(({data}) => setVideo(data.results))
    },[])
    const duration = `${Math.floor( runtime / 60)} hourse ${ runtime % 60} min`
    console.log(video)
    return (
        <div className="detals-page p-5"
           style={{
               background:`url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat center/cover`, height:"100%"
        }}>
            <div className="container">
                <div className="row">
                    <div className="d-flex">
                        <div className="col-6">
                            <img src={`https://www.themoviedb.org/t/p/w300${poster_path || backdrop_path}`} alt="" style={{boxShadow:"5xp 5px 10px -3px white"}}/>

                        </div>
                            <div className="col-6 text-white" >
                            <h2>{original_title}</h2>
                            <h4>{release_date}</h4>
                            <p>{overview}</p>
                            <p>{status}</p>
                                <p>{duration}</p>

                        </div>



                    </div>


                    <div className="actors" >
                      <ActorsPage/>

                    <VideoPage video={video}/>

                </div>
                </div>

            </div>

        </div>
    );
};

export default MovieDetals;