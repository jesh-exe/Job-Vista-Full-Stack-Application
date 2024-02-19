import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


export default function Contact() {

    useEffect(() => {

        window.scrollTo(0, 0);

        ScrollReveal().reveal(".top-side", {
            origin: "top",
            duration: 1500,
            distance: "200px"
        })
        ScrollReveal().reveal(".left-side", {
            origin: "left",
            duration: 1500,
            distance: "200px",
            scale: 1.2
        })
        ScrollReveal().reveal(".right-side", {
            origin: "right",
            duration: 1500,
            distance: "200px",
            scale: 1.2
        })
    }, [])

    return (
        <>
            <section className="ftco-section my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5 top-side">
                            <h2 className="display-6">Contact Us</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-md-7 d-flex align-items-stretch" >
                                        <div className="contact-wrap w-100 p-md-5 p-4 left-side ">
                                            <h3 className="mb-4">Get in touch !</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className="mb-4">
                                                {/* Your message was sent, thank you! */}
                                            </div>
                                            <form method="POST" id="contactForm" name="contactForm">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message " required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <input type="button" value="Send Message" className="btn btn-success" />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="info-wrap bg-primary rounded-5 text-white w-100 p-lg-5 p-4 right-side">
                                            <h3 className="mb-4 mt-md-4 text-center">Job Vista Details</h3>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex  align-items-center justify-content-center mt-4">
                                                    <span className="fa fa-map-marker"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Address:</span> Pune, Maharashtra, India 
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Phone :</span> +91 9283029328
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Email :</span>  jobvista@gmail.com
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Website : </span>  job-vista.netlify.app
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
