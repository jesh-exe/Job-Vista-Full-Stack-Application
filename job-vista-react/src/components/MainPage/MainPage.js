import React, { Component, useEffect } from 'react'
import Working from './Working'
import WhatWeDo from './WhatWeDo'
import Welcome from './Welcome'
import "../../css/MainPage/MainPage.css"

export default function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div>
      <div className='container-fluid'>
        <div className='row '>

          <Welcome></Welcome>


          <div className='pt-5 pb-5 bg-white rounded-3'>
            <WhatWeDo></WhatWeDo>
          </div>

          <div className='partition'></div>


          <Working></Working>

          <div className='partition'></div>

        </div>
      </div>
    </div>
  )
}
