import React, {useContext} from 'react'
import ReviewItem from './ReviewItem'
import {ReviewContext} from '../ReviewContext'

const ReviewList = () => {

    const {review} = useContext (ReviewContext)
    if(!review || review.length === 0){
        return "loading ......."
      }
  return (
    <div className='card-container'>
    {review.map(({id, userId, title, body}) =>(
        <ReviewItem key={id} userId ={userId} title ={title} body={body}/>
    ))}

    </div>
  )
}

export default ReviewList