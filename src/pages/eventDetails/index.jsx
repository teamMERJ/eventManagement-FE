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
    <div className="bg-[rgba(231,234,238,0.83)] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg border-4 border-purple-100">
        <h1 className="text-2xl font-bold text-gray-900">EVENT DETAILS</h1>
        <div className="flex items-center justify-between"> 
          <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
          <span className="text-lg text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="mt-6">
          <img src={`https://savefiles.org/${event.flier}?shareable_link=287`} alt="Event Flier" className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Description</h2>
          <p className="mt-2 text-gray-600">{event.description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Location</h2>
          <p className="mt-2 text-gray-600">{event.location}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Price</h2>
          <p className="mt-2 text-gray-600">GHC {event.price}</p>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-[#8f3e3e] text-white rounded-lg shadow-lg hover:bg-[#c29b46] transition duration-300">Buy Tickets</button>
        </div>
      </div>
    </div>

   }
   
   </>

  )
}

export default EventDetails