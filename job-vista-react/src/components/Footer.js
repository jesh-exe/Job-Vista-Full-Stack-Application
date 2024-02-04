import React, { useEffect } from 'react'
import '../css/Footer.css'
import ScrollReveal from 'scrollreveal';

export default function Footer() {

    useEffect(() => {
        ScrollReveal().reveal(".footer", {
            origin: "bottom",
            duration: 1500,
            distance: "200px",
            scale: 1,
        });
    }, [])

    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    <div className="icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
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
                    <h2> Company<span> logo</span></h2>
                    <p className="name"> Company Name &copy; 2016</p>
                </div>
            </footer>
        </div>
    )
}
