import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/AboutUs.css';
import Working from './MainPage/Working';

const AboutUs = () => {
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

      <Working></Working>



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

      <div className='text-center my-5 py-5 container'>
        <div className='display-6 mb-5'>Locate Us At</div>
        <div className='row' style={{minHeight:"69vh"}}>
          <div className='col-12'>
            <iframe className='rounded-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.56734587713!2d73.80563087539173!3d18.53378938918883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1708241098438!5m2!1sen!2sin" 
            width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;