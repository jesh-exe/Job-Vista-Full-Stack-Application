import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import second_image_mainpage from "../../assets/WhatWeDoImage.png";
import "../../css/MainPage/WhatWeDo.css"
import { NavLink } from 'react-router-dom';

export default function WhatWeDo() {

    useEffect(() => {
        ScrollReveal().reveal(".left", {
            origin: "left",
            distance: "300px",
            duration: 1500
        });
        ScrollReveal().reveal(".right", {
            scale: 0.5,
            duration: 1500
        });
    }, [])

    return (
        <div>
            <div class="container text-center mt-5 pt-lg-5 pt-md-5 pb-lg-5 pb-md-5">
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 mb-3 left'>
                        <img src={second_image_mainpage} className='img-fluid img-hold'></img>
                    </div>

                    <div class='col-sm-12 col-md-12 col-lg-6 right mt-2 right'>
                        <div className='firstheading'>
                            <h6 className='text-start'>WHAT WE ARE DOING</h6>
                        </div>
                        <div>
                            <h2 className='text-start'>24K Talented people are <br />getting jobs</h2>
                        </div>
                        <div>
                            <p className="text-start mt-2">Looking for Top Talent? Let Us Help You! Post Your Jobs Here and Reach Thousands of Job Seekers!</p>
                        </div>

                        <div className='text-start text-secondary'>
                            <p >Open for Business: Showcase Your Jobs on Our Platform and Discover Your Next Team Member</p>
                        </div>
                        <NavLink to="/register/recruiter">
                            <button className='btn btn-primary btn-lg mt-2'>Post a Job</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}
