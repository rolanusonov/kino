import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="col-3 my-4" key={el.id}>
            <div>
                <Link to={`/detals/${el.id}`}>
                <img className="img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" style={{boxShadow: "5px 5px 10px -3px black"}}/>
                    </Link>
            </div>
            <div>
                <p className="flex flex-lg-wrap">{el.title} </p>
            </div>
        </div>
    );
};

export default MovieCard;