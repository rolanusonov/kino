import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCard from "../utils/MovieCard";
import {Apikey} from "../utils/Apikey";
import {Form} from "react-bootstrap";

const Popular = () => {
    // function rain (){
    //     let amount =20;
    //     let body = document.querySelector('body');
    //     let i =0
    //     while( i < amount){
    //         let drop = document.createElement('i')
    //         let size = Math.random() * 5;
    //         let posX = Math.floor(Math.random()* window.innerWidth)
    //         let delay = Math.random() * -20;
    //         let  duration = Math.random() * 5;
    //         drop.style.width = 0.2+size+'px';
    //         drop.style.left = posX+ 'px';
    //         drop.style.animationDelay = delay + 's'
    //         drop.style.animationDuration = 1 + duration + 's'
    //         body.appendChild(drop)
    //         i++
    //     }
    // }
    // rain();
    const [popularFilms, setPopularFilms] = useState([])
    const [pages, setPages] = useState(1)
    const [currentPages, setCurrentPages] = useState(1)
    const [option, setOption] = useState("")
    const handleOption = (e) => {
        setOption(e.target.value)
    }



    let pageNumber = []
    for (let i = 1; i <= 20; i++) {
        pageNumber.push(i)
    }
    function showContent(newPage) {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${option}&page=${newPage || 1}`)
            .then(({data}) => {
                console.log(data)
                setPages(data.totalPages)
                setPopularFilms(data.results)
                setCurrentPages(newPage)
            })
        window.scrollTo(0, 0)
    }



// const [counter,setCounter] = useState(0)
    useEffect(() => {
        showContent()

    }, [])
    console.log(pageNumber)
    return (
        <div className="container">

            <h1 className="h1">Popular Films</h1>
            <Form.Select aria-label="Default select example"
                         onChange={(e) => handleOption(e)}>
                <option value="ru-RU" selected>Русский</option>
                <option value="en-US">English</option>
            </Form.Select>
            <span className="i"> </span>
            <div className="row">


                {
                    popularFilms.map(el => (
                        <div className="col-3 ">

                            <div className="bigimg">
                                {/*<img className="img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>*/}
                                <MovieCard className="img" el={el} key={el.id}/>

                            </div>

                            <div>
                                <p className="title">{el.title}</p>
                            </div>
                        </div>
                    ))

                }

            </div>
            <div className="d-flex justify-content-center ">
                {
                    pageNumber.map(page => (
                        <button
                            className={`btn mx-2 ${page === currentPages || page === 1 ? "btn-danger" : "btn-success"}`}
                            onClick={() => showContent(page)}>{page}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;