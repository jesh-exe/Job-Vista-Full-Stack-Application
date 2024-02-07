export default function Contact() {
    return (
        <> 
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Contact Form #01</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-md-7 d-flex align-items-stretch" >
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Get in touch</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form method="POST" id="contactForm" name="contactForm">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pt-3">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message" className="btn btn-primary" />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap  w-100 p-lg-5 p-4 ">
                                            <h3 className="mb-4 mt-md-4">Contact us</h3>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-map-marker"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Email:</span> <a href="/cdn-cgi/l/email-protection#066f686069467f697374756f72632865696b"><span className="__cf_email__" data-cfemail="dab3b4bcb59aa3b5afa8a9b3aebff4b9b5b7">[email&#160;protected]</span></a>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3 p-3">
                                                    <span>Website</span> <a href="#">yoursite.com</a>
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
