import React from 'react'

const TextSlideAnimation = () => {
  return (
    <>
          <div className="container mx-auto max-w-7xl flex justify-center">
              <div className='slidetext '>
                  {/* Text and Image with slide animation */}
                  <div className="slideTextOne flex items-center flex-wrap gap-4 relative">
                      <h1 className="text-5xl font-bold uppercase">we</h1>
                      <img
                          src='./img/slideImg1.png'
                          alt="slide 1"
                          className="h-11 max-w-xs object-cover"
                      />
                      <h1 className="text-5xl font-bold uppercase bg-[#fff4df] animate1 absolute right-8 top-0 h-11 px-2">
                          organize the
                      </h1>
                  </div>

                  <div className="slideTextTwo flex flex-wrap items-center gap-4 mt-9 relative">
                      <h1 className="text-5xl font-bold uppercase">connection</h1>
                      <img
                          src='./img/slideImg2.png'
                          alt="slide 2"
                          className="h-11 max-w-[25rem] object-cover"
                      />
                      <div className="bg-[#fff4df] h-11 absolute right-12 animate2"></div>
                  </div>

                  <div className="slideTextThree flex-wrap flex items-center gap-4 mt-9 relative">
                      <img
                          src='./img/slideImg3.png'
                          alt="slide 3"
                          className="h-11 object-cover"
                      />
                      <div className="flex animate3 gap-4 absolute right-24 bg-[#fff4df] ps-2">
                          <h1 className="text-5xl font-bold uppercase">between</h1>
                          <img
                              src='./img/slideImg4.png'
                              alt="slide 4"
                              className="h-11 object-cover"
                          />
                          <h1 className="text-5xl font-bold uppercase">music</h1>
                      </div>
                  </div>

                  <div className="slideTextFour flex-w\ flex items-center gap-4 mt-9 relative">
                      <h1 className="text-5xl font-bold uppercase">Artist</h1>
                      <img
                          src='./img/slideImg5.png'
                          alt="slide 5"
                          className="h-11 max-w-[17.5rem] object-cover pe-5"
                      />
                      <div className="flex gap-4 absolute -right-28 animate4">
                          <h1 className="text-5xl font-bold uppercase bg-[#fff4df] ps-2">
                              culture
                          </h1>
                          <img
                              src='./img/slideImg6.png'
                              alt="slide 6"
                              className="h-11 object-cover w-60"
                          />
                      </div>
                      <div className="h-11 bg-[#fff4df] w-40 absolute -right-32 top-0"></div>
                  </div>

                  <div className="slideTextFive flex flex-wrap items-center gap-4 mt-9">
                      <img
                          src='./img/slideImg7.png'
                          alt="slide 7"
                          className="h-11 object-cover"
                      />
                      <div className="flex gap-4 animate5 relative right-4 top-0 bg-[#fff4df]">
                          <h1 className="text-5xl font-bold uppercase ps-2">art</h1>
                          <img
                              src='./img/slideImg8.png'
                              alt="slide 8"
                              className="h-11 object-cover "
                          />
                          <h1 className="text-5xl font-bold uppercase">& collections</h1>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default TextSlideAnimation
