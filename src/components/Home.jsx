import React from 'react'
import Navbar from './Navbar'
import TextSlideAnimation from './TextSlideAnimation'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
          <div className="bg-[#fff4df] md:h-screen sm:h-full" onClick={()=>navigate('/events')}>
              <div className="container mx-auto py-10 max-w-6xl">
                  <Navbar dark={false} />
              </div>
              <TextSlideAnimation />
          </div>
    </>
  )
}

export default Home
