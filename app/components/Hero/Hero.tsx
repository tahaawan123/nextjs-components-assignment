import React from 'react'

export default function Hero() {
  return (
    <div className='text-center bg-[url(https://media.istockphoto.com/id/1169929038/photo/developing-programmer-team-development-website-design-and-coding-technologies-working-in.jpg?s=612x612&w=0&k=20&c=iYn6eu084MXrhdW8JEyJ1vcCHIfyMhvnKyk6AkAgmME=)] bg-cover  bg-center h-screen'>
      <h1 className=' text-5xl text-white'>Welcome to My Website</h1>
      <p className='text-lg mt-4 text-white' >Your Jounrney Starts here</p>
      <button className="bg-white text-blue-500 px-4 py-2 mt-8 rounded hover:bg-green-400">Get started</button>
    </div>
  )
}
