import React from 'react'
import reviewpix1 from './images/2021-07-31.jpg'
import poweredG from './images/powered_by_google_on_white.png'
import google from './images/google-logo.png'
import { StarFill, StarHalf } from 'react-bootstrap-icons'
import { Carousel } from "react-bootstrap";

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
                                <img src={poweredG} alt="" className='w-100' />
                            </div>
                            <div className='review-btn d-flex align-items-center justify-content-center mx-auto mt-2'>
                                <button className='d-flex align-itmes-center px-3 py-1 shadow-sm rounded-pill'>
                                    <div className='me-1'>
                                        <span className='r-text'>review us on</span>
                                    </div>
                                    <div className='google-img bg-white rounded-circle d-flex align-items-center justify-content-center'>
                                        <img src={google} alt="" className='w-100' />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='d2'>
                            <Carousel pause={false} interval={3000}>
                                <Carousel.Item>
                                    <div className='d-flex'>
                                        <div className='slide-rating-div me-5'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Oluwaseyi Odekomoya</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>I've compared other platforms to this one to be honest and they don't measure up. The platforms that give a comparable level of the quality of skills cost a lot more and don't even offer a guarantee of access to real world project and situations... The ones available at a cheaper price so to say do not give a level of quality even close to it... Some platforms charge a lot more and yet still falter in the delivery of good contents... Another aspect that I noticed in comparison is that instructors at SQI College of ICT are actually interested in ensuring their students understand what they are learning. They take joy in ensuring the students comprehend and are able to apply what is being taught and explain in the simplest ways possible to ensure maximum comprehension....I'm not sharing this because I have any affiliation with SQI College of ICT, I'm doing so because it's simply the truth. If anyone else tries to make their research, they will find out that it's true too.</span>
                                            </div>
                                        </div>
                                        <div className='slide-rating-div'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Oladimeji Sodeeq</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>It's an awesome place to learn. It has a serene environment, the tutors are friendly and very explanatory. I really love the place</span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='d-flex'>
                                        <div className='slide-rating-div me-5'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>E</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Emmanuel Toluwanimi</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>SQI is one of the things I’m thankful for in my life. I’ve spent six months in SQI and I can say it’s one of the best moments in my life. The staffs are accommodating and very excellent at their job. The tutors don’t just teach, they mentor students. They make coding fun and understandable for learners. I’m able to achieve a lot enrolling with them. I’ve been able to build amazing web projects under their tutelage. ENROLL WITH SQI AND YOU WILL BE PROUD YOU DID.</span>
                                            </div>
                                        </div>
                                        <div className='slide-rating-div'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Omolola Omolabake</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>It is a great place to learn. It is a condusive environment filled with loving and patient teachers,a wonderful and admirable manager and supportive and cheerful students. For the past month have been here, it's been great</span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='d-flex'>
                                        <div className='slide-rating-div me-5'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>C</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Cherish Ordia</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>Coming to SQI has made me believe that life has more to offer.Talking about being experienced in ICT rapidly, SQI deserves uncountable recommendations.Thank u SQI for making me believe more in myself, thanks for bringing out some qualities that I'll never think of years to come in my life.My heart is full of gratitude</span>
                                            </div>
                                        </div>
                                        <div className='slide-rating-div'>
                                            <div className='d-flex mb-3'>
                                                <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                <div className='ms-1'>
                                                    <h6 className='mt-1'>Omolola Omolabake</h6>
                                                    <div className='year'>a year ago</div>
                                                </div>
                                            </div>
                                            <div className='star-div'>
                                                <span className='star'>
                                                    <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                </span>
                                            </div>
                                            <div className='overflow-auto comment mt-2'>
                                                <span>It is a great place to learn. It is a condusive environment filled with loving and patient teachers,a wonderful and admirable manager and supportive and cheerful students. For the past month have been here, it's been great</span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                {/* Add more Carousel.Item components for additional slides */}
                            </Carousel>

                            {/* <div id="carouselExampleSlidesOnly" className='carousel slide' data-bs-ride="carousel">
                                <div className='carousel-indicators'>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className='carousel-inner'>
                                    <div className='carousel-item active'>
                                        <div className='d-flex'>
                                            <div className='slide-rating-div me-5'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>C</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Cherish Ordia</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>Coming to SQI has made me believe that life has more to offer.Talking about being experienced in ICT rapidly, SQI deserves uncountable recommendations.Thank u SQI for making me believe more in myself, thanks for bringing out some qualities that I'll never think of years to come in my life.My heart is full of gratitude</span>
                                                </div>
                                            </div>
                                            <div className='slide-rating-div'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Omolola Omolabake</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>It is a great place to learn. It is a condusive environment filled with loving and patient teachers,a wonderful and admirable manager and supportive and cheerful students. For the past month have been here, it's been great</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item'>
                                        <div className='d-flex'>
                                            <div className='slide-rating-div me-5'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>C</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Cherish Ordia</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>Coming to SQI has made me believe that life has more to offer.Talking about being experienced in ICT rapidly, SQI deserves uncountable recommendations.Thank u SQI for making me believe more in myself, thanks for bringing out some qualities that I'll never think of years to come in my life.My heart is full of gratitude</span>
                                                </div>
                                            </div>
                                            <div className='slide-rating-div'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Omolola Omolabake</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>It is a great place to learn. It is a condusive environment filled with loving and patient teachers,a wonderful and admirable manager and supportive and cheerful students. For the past month have been here, it's been great</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item'>
                                        <div className='d-flex'>
                                            <div className='slide-rating-div me-5'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>C</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Cherish Ordia</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>Coming to SQI has made me believe that life has more to offer.Talking about being experienced in ICT rapidly, SQI deserves uncountable recommendations.Thank u SQI for making me believe more in myself, thanks for bringing out some qualities that I'll never think of years to come in my life.My heart is full of gratitude</span>
                                                </div>
                                            </div>
                                            <div className='slide-rating-div'>
                                                <div className='d-flex mb-3'>
                                                    <div className='me-2 name rounded-circle bg-danger d-flex align-items-center justify-content-center fs-3 text-white shadow'>O</div>
                                                    <div className='ms-1'>
                                                        <h6 className='mt-1'>Omolola Omolabake</h6>
                                                        <div className='year'>a year ago</div>
                                                    </div>
                                                </div>
                                                <div className='star-div'>
                                                    <span className='star'>
                                                        <StarFill /> <StarFill /> <StarFill /> <StarFill /> <StarFill />
                                                    </span>
                                                </div>
                                                <div className='overflow-auto comment mt-2'>
                                                    <span>It is a great place to learn. It is a condusive environment filled with loving and patient teachers,a wonderful and admirable manager and supportive and cheerful students. For the past month have been here, it's been great</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionSeven