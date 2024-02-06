import React, { Component } from 'react'
import "../css/MainPage.css"
export default class MainPage extends Component {

  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            {/* Trupti */}
            <div>

            </div>

            {/* Mandeep */}
            <div>

            </div>

            {/* Vaishnavi */}
            <div className='card-holder-main text-white mt-3 mb-3'>
              <div class="container-fluid text-center">
                <div className='row'>
                  {/* Heading of 3rd Component */}
                  <div className='col-sm-12 fw-bolder col-md-12 p-4 mt-4 h1'>
                    How it Works
                  </div>
                  {/* 3 Card Holder */}
                  <div className='col-sm-12 col-md-12 mb-4'>
                    <div className='container px-4'>
                      <div className='row gx-5'>
                        {/* Card 1 */}
                        <div className='card-main col p-5 m-4 rounded'>
                          <div className='h4'>1. Search a job </div>
                          <span className='fs-6 text-secondary'> hegwfihrskhflkhh gefhgrkjf djfhhkdsjhvfkj dskjhskj sdbckjchkjd sdbcjkbckj ndbsckjb bscdkbck</span>
                        </div>
                        {/* Card 2 */}
                        <div className='card-main col p-5 m-4 rounded'>
                          <div className='h4'>2. Apply for job</div>
                          <span className='fs-6 text-secondary'> hegwfihrskhflkhh gefhgrkjf djfhhkdsjhvfkj dskjhskj sdbckjchkjd sdbcjkbckj ndbsckjb bscdkbck</span>
                        </div>
                        {/* Card 3 */}
                        <div className='card-main col p-5 m-4 rounded'>
                          <div className='h4'>3. Get your job </div>
                          <span className='fs-6 text-secondary'> hegwfihrskhflkhh gefhgrkjf djfhhkdsjhvfkj dskjhskj sdbckjchkjd sdbcjkbckj ndbsckjb bscdkbck</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
