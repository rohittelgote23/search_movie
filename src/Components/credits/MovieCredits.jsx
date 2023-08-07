import React, { useState } from 'react'
import { useEffect } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import './MovieCredits.css'
import Reviews from '../reviews/Reviews'

const MovieCredits = ({ id }) => {
    const [casteDetails, setCasteDetails] = useState([])
    useEffect(() => {
        getCredits()
    }, [])
    function getCredits() {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=2c694ff614f9e7c71cdb5372c5a2fb8b`)
            .then(res => res.json())
            .then(data => setCasteDetails(data.cast))
    }

    const items = casteDetails.map(cast => (
        <div className="carouselItem">
            {
                cast.profile_path ?
                    <>

                        <img title = {cast.name} src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                            alt={cast?.name}
                            className="carouselItem__img"
                        />
                        <h3 className="carouselItem__txt text-center">{cast.name}</h3>

                    </>
                    : null
            }
        </div>
    ))


    const responsive = {
        0: {
            items: 3
        },
        512: {
            items: 5
        },
        1024: {
            items: 7
        },
    }



    return (
        <>
            <div className="main-credits">
                <h1 style={{marginTop: "1rem"}} className='credit-head'>Credits</h1>
                <AliceCarousel
                    disableButtonsControls = {false}
                    disableDotsControls
                    autoPlay={true}
                    autoPlayInterval={3000}
                    mouseTracking
                    responsive={responsive}
                    infinite
                    animationType='slide'
                    items={items}
                />
            </div>
            {/* </main> */}
            <Reviews id={id} />
        </>
    )
}
export default MovieCredits

