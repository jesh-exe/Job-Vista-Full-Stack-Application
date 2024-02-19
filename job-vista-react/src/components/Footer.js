import React, { useEffect } from 'react'
import '../css/Footer.css'
import ScrollReveal from 'scrollreveal';

export default function Footer() {

    // useEffect(() => {
    //     ScrollReveal().reveal(".footer", {
    //         origin: "bottom",
    //         duration: 1500,
    //         distance: "200px",
    //         scale: 1,
    //     });
    // }, [])

    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> The purpose of Job Vista - Your Gateway to Career Horizons is to provide individualswitha comprehensive and user-friendly platform for navigating the job market. Job Vista aims tosimplify the job search process, offering a panoramic view of career opportunities and guidingusers through their unique career journeys. By offering a diverse range of job listings andresources, Job Vista aims to empower individuals in their pursuit of fulfilling employment
opportunities.
                    </p>
                    
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>Pune, India</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+91) 9211 420 420</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="#"> jobvista@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> Job<span>Vista</span></h2>
                    <p className="name"> JobVista &copy; 2023</p>
                </div>
            </footer>
        </div>
    )
}
