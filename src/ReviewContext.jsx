import React from 'react'
import{createContext, useState, useEffect} from 'react'

export const ReviewContext = createContext()
const url = 'https://jsonplaceholder.typicode.com/posts'
const ReviewProvider =({children}) =>{
const [review, setReview] = useState([])


//fetchingdata
const fetchReview = async () =>{
    const response = await fetch (url);
    const review = await response.json();
    setReview(review)
    console.log(review);
};

//calling our fetch functions
useEffect(() =>{
    fetchReview();
}, []);

//adding new review 
const addReview = async (newReview) => {
    const response = await fetch (url, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
    const data = await response.json()
    setReview([data, ...review])
}



  return (
    <ReviewContext.Provider value={{review}}>
        {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider