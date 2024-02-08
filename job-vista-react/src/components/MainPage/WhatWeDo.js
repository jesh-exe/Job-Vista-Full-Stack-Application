import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import second_image_mainpage from "../../assets/WhatWeDoImage.png";
import "../../css/MainPage/WhatWeDo.css"

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
                            <p className="text-start">Mollit anim laborum duis ou dolor in voluptate velit esss cillium doore eu lore dsu quality mallit anim laborumuis au dolor in valuptate velit cillum.</p>
                        </div>

                        <div className='text-start text-secondary'>
                            <p >Mollit anim laborum duis ou dolor in voluptate velit esss cillium doore eu lore dsu quality mallit anim laborumuis au dolor in valuptate velit cillum.</p>
                        </div>

                        <button className='btn btn-primary btn-lg mt-2'>Post a Job</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
