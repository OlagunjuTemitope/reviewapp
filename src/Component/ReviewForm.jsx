import React, {useState, useContext} from 'react'
import {ReviewContext} from '../ReviewContext'


const ReviewForm = () => {

    const[userId, setUserId] = useState("")
    const[title, setTitle] = useState("")
    const[body, setBody] = useState("")
    const[message, setMessage] = useState("")

    const {addReview} = useContext(ReviewContext)

    const handleSubmit = (e) => {e.preventDafault()
    const newReview = {
    title,
    userId,
    body,
    }
    addReview(newReview)
    setMessage(userId, title, body)
    setUserId("")
    setTitle("")
    setBody("")
    }

  return (
    <div>
        <h2>Review Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter UserId' required value={userId} onChange={(e)=> setUserId(e.target.value)}/>
            <input type="text" placeholder='Enter Enter Title' required value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" placeholder='Enter Enter Body' required value={body} onChange={(e)=> setBody(e.target.value)}/>


            <button>Submit Review</button>

        </form>
    </div>
  )
}

export default ReviewForm