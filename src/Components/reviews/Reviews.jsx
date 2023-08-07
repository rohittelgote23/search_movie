import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const { id } = useParams();


  useEffect(() => {
    getCredits()
  }, [])

  function getCredits() {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2c694ff614f9e7c71cdb5372c5a2fb8b&language=en-US`)
      .then(res => res.json())
      .then(data => setReviews(data.results))
  }


  return (
    <>
      <h1 className='text-center'>Reviews</h1>
      {
        reviews.length <= 0 ?

          <h1 className='text-center'>No One Reviewed yet</h1>
          :
          <div className="all-reviews">

            {
              reviews.map(review => (
                <ReviewsCard review={review} key={review.id} />
              ))
            }
          </div>

      }
    </>
  )
}

export default Reviews
