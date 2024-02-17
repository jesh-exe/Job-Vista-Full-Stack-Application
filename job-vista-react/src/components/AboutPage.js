import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    ScrollReveal().reveal(".emerge", {
      scale: 0.7,
      duration: 1500
    });
  }, []);

  return (
    <>
     
        <div className="slider-area my-5">
            <div className="single-slider section-overly slider-height2 d-flex align-items-center">
                <div className="container">
                <   div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5 top-side">
                            <h2 className="display-6">About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="bg-img-blur"></div> */}

        <div className='card-holder-main text-white rounded-3 pt-md-5 pb-mt-5 pt-lg-5 pb-lg-5'>
            <div class="container-fluid text-center emerge pt-md-5 pb-mt-5 pt-lg-5 pb-lg-5">
                <div className='row'>
                    {/* Heading of 3rd Component */}
                    <div className='col-sm-12 fw-bolder col-md-12 p-4 mt-4 h1'>
                        How it Works
                    </div>
                    {/* 3 Card Holder */}
                    <div className='col-sm-12 col-md-12 mb-4'>
                        <div className='container ps-4'>
                            <div className='row gx-5'>
                                {/* Card 1 */}
                                <div className='card-main col p-md-5 p-3 pt-5 pb-5 m-4 rounded-5 emerge'>
                                    <div className='fs-4 mb-2'>Search a job </div>
                                    <span className='fs-6 muted-data'> The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable</span>
                                </div>
                                {/* Card 2 */}
                                <div className='card-main col p-md-5 p-3 pt-5 pb-5 m-4 rounded-5 emerge'>
                                    <div className='fs-4 mb-2'>Apply for job</div>
                                    <span className='fs-6 muted-data'> The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable</span>
                                </div>
                                {/* Card 3 */}
                                <div className='card-main col p-md-5 p-3 pt-5 pb-5 m-4 rounded-5 emerge'>
                                    <div className='fs-4 mb-2'>Get your job </div>
                                    <span className='fs-6 muted-data'> The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

      

        <div className='bg-img-blur'></div>


      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000" >
            <div className="d-block w-100" style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh' }}>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Margaret Lawson</h5>
                <p className="lh-lg lead">Creative Director</p>
                <p className="text-muted small">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="d-block w-100" style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh' }}>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Margaret Lawson</h5>
                <p className="lh-lg lead">Creative Director</p>
                <p className="text-muted small">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000" >
            <div className="d-block w-100" style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh' }}>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Margaret Lawson</h5>
                <p className="lh-lg lead">Creative Director</p>
                <p className="text-muted small">“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="bg-img-blur"></div>
     
    </>
  );
};

export default  AboutPage;