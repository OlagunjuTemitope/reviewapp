import React from 'react'
// import {userContext} from 'react'
// import {ReviewContext} from '../ReviewContext'



const ReviewItem = ({id, userId, title, body}) => {

    
  return (
    <div className='card'>
        <h6>{id}</h6>
        <h6>{userId}</h6>
        <h6>{title}</h6>
        <p>{body}</p>
        {/* <button>Delete</button> */}

    </div>
  )
}

export default ReviewItem