import React, { useEffect } from 'react'
import "../../css/MainPage/Working.css"
import ScrollReveal from 'scrollreveal'

export default function Working() {

    useEffect(()=>{
        ScrollReveal().reveal(".emerge",{
            scale: 0.7,
            duration: 1500
        });
    },[])

    return (
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
                                    <span className='fs-6 muted-data'>Are you ready to take the next step in your career journey? Look no further  exciting opportunities waiting for you. Search where your skills meet opportunities.</span>
                                </div>
                                {/* Card 2 */}
                                <div className='card-main col p-md-5 p-3 pt-5 pb-5 m-4 rounded-5 emerge'>
                                    <div className='fs-4 mb-2'>Apply for job</div>
                                    <span className='fs-6 muted-data'>If you're ready to take on exciting challenges and make a meaningful impact in the world of technology. Apply now to join our dynamic team and embark on a rewarding career journey.</span>
                                </div>
                                {/* Card 3 */}
                                <div className='card-main col p-md-5 p-3 pt-5 pb-5 m-4 rounded-5 emerge'>
                                    <div className='fs-4 mb-2'>Get your job </div>
                                    <span className='fs-6 muted-data'>Don't let your dream job slip away. Join our job portal today and embark on a journey towards fulfilling career opportunities. Start your journey to a fulfilling career today!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
