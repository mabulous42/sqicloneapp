import React from 'react'
import reviewpix1 from './images/2021-07-31.jpg'
import poweredG from './images/powered_by_google_on_white.png'
import google from './images/google-logo.png'
import { StarFill, StarHalf } from 'react-bootstrap-icons'

function SectionSeven() {
    return (
        <>
            <div className='content-7'>
                <div className='testimonial-div mx-auto'>
                    <h2 className='ps-2'>Testimonials</h2>
                    <p>Read what our current students and alumni have to say about their SQI experience.</p>
                </div>
                <div className='reviews mx-auto py-4'>
                    <div className='d-flex inner-review'>
                        <div className='d1 bg-white'>
                            <div className='mx-auto pix-div'>
                                <img src={reviewpix1} alt="" className='rounded-circle' />
                            </div>
                            <div className='text-center'>
                                <span>SQI College of ICT IBADAN</span>
                            </div>
                            <div className='text-center rating-div'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <span className='me-1'>4.9</span>
                                    <span className='star'>
                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarHalf />
                                    </span>
                                </div>
                            </div>
                            <div className='total-review text-center mt-1'>Based on 84 reviews</div>
                            <div className='powered-div mx-auto mt-1'>
                                <img src={poweredG} alt="" className='w-100'/>
                            </div>
                            <div className='review-btn d-flex align-items-center justify-content-center mx-auto mt-2'>
                                <button className='d-flex align-itmes-center px-3 py-1 shadow-sm rounded-pill'>
                                    <div className='me-1'>
                                        <span className='r-text'>review us on</span>
                                    </div>
                                    <div className='google-img bg-white rounded-circle d-flex align-items-center justify-content-center'>
                                        <img src={google} alt="" className='w-100'/>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='d2'>Slide show here</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionSeven