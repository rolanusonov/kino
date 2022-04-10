import React, {useEffect, useState} from 'react';
import Slider from "react-slick"
import axios from "axios";
import {Apikey} from "../utils/Apikey";
import {Link, useParams} from "react-router-dom";

const ActorsPage = () => {
    const [actors, setActors] =useState([])
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const {movieId} = useParams()

 
    useEffect( () =>{
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Apikey}&language=en-US`)
            .then(({data}) => setActors(data.cast))
    },[])
    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
                {
                    actors.map(el => (
                         <Link to={`/detals/person/${el.id}`}>
                             <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/>
                         </Link>
                    ))
                }

            </Slider>
        </div>
    );
};

export default ActorsPage;