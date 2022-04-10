import React from 'react';
import Slider from "react-slick";
import YouTube from 'react-youtube';
const VideoPage = ({video}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters

        },
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    video.map(el => (
                        <div className="my-5">
                            <YouTube videoId={el.key} opts={opts} key={el.id}/>
                        </div>
                    ))
                }

            </Slider>
        </div>
    );
};

export default VideoPage;