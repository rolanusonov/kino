import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick"
import {Apikey} from "../utils/Apikey";


const ActorInfo = () => {
    const [actor, setActor] =useState([])
    const [actorFilms, setActorFilms]=useState([])
    const {actorId} = useParams()
    useEffect( () => {
axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${Apikey}&language=en-US`)
    .then(({data}) =>setActor(data))

        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${Apikey}&language=en-US`)
            .then(({data}) => setActorFilms(data.cast))
    },[])
    console.log(actor)
    let settings = {
        dots: true,
        infinite: true,
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
    const {
        profile_path,birthday,name,place_of_birth,know_of_department,biography
    }=actor
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="actorimg my-4" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`} alt=""/>
                </div>
                <div className="col-8 actorprofi">

                    <h3>{name}</h3>
                    <h3>{birthday}</h3>
                    <h3>{know_of_department}</h3>
                    <p>{biography}</p>
                    <Slider {...settings}>
                        {
                            actorFilms.map(el => (
                                <div>
                                    <Link to={`/detals/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt=""/>
                                </Link>
                                    <p>{el.title}</p>
                                </div>

                            ))
                        }

                    </Slider>
                </div>


            </div>

        </div>
    );
};

export default ActorInfo;