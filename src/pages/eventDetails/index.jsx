import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventDetails = () => {
 const params =  useParams()
const [event, setEvent] = useState()
const [isLoading, setIsLoading] = useState(false)



 const getSingleEvent = async() => {
  setIsLoading(true)
  const response = await axios.get(
    `https://eventmanagement-be.onrender.com/events/${params.id}`
  );
  console.log(response.data)
  if (response.status === 200) {
    setEvent(response.data);
  } else {
    setEvent([]);
  }
  setIsLoading(false)
 }

 useEffect(() => {
  getSingleEvent();
}, []);

  return (
   <>
   {
    isLoading? <div>Loading..</div>:
    // page styling starts from here
    <div>
    <h1 className='text-xl'>{event?.name}</h1>
    <span>{event?.description}</span>
    </div>
   }
   
   </>

  )
}

export default EventDetails