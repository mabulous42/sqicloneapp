import React from 'react'
import sofwareEngineering from './images/software-engineering-630x330-1.webp'
import product from './images/product.jpg'
import dataSQI from './images/DATA-SQI.jpg'
import digitalLiteracy from './images/digital-literacy.jpg'

function SectionFive() {
    return (
        <>
            <div className='content-5'>
                <div className='d-flex align-items-center justify-content-center s5-div mx-auto'>
                    <div className='w-50 me-5 s5-left-div'>
                        <h2>Our Top Courses</h2>
                        <p>Take a look at some of our popular courses</p>
                        <div>
                            <a href="" className='a'>View all Courses</a>
                        </div>
                        <div className='mt-5 s5-img-content-left-div rounded-4 shadow-lg py-5 mb-2'>
                            <div className='s5-img-content-left mx-auto'>
                                <div className='w-100'>
                                    <img src={sofwareEngineering} alt="" className='w-100 rounded-3' />
                                </div>
                                <h3 className='mt-4'>Software Engineering</h3>
                                <p>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                                <p>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                                <div>
                                    <a href="" className='a'>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 s5-img-content-left-div2 rounded-4 shadow py-5 mb-3'>
                            <div className='s5-img-content-left mx-auto'>
                                <div className='w-100'>
                                    <img src={product} alt="" className='w-100 rounded-3' />
                                </div>
                                <h3 className='mt-4'>UI/UX – Product Design</h3>
                                <p>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
                                <p>Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
                                <div>
                                    <a href="" className='a'>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='mt-5 s5-img-content-right-div rounded-4 shadow-lg py-5 mb-2'>
                            <div className='s5-img-content-left mx-auto'>
                                <div className='w-100'>
                                    <img src={dataSQI} alt="" className='w-100 rounded-3' />
                                </div>
                                <h3 className='mt-4'>Data Science & Analysis</h3>
                                <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                                <p>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                                <div>
                                    <a href="" className='a'>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 s5-img-content-right-div2 rounded-4 shadow-lg py-5 mb-2'>
                            <div className='s5-img-content-left mx-auto'>
                                <div className='w-100'>
                                    <img src={digitalLiteracy} alt="" className='w-100 rounded-3' />
                                </div>
                                <h3 className='mt-4'>Digital Literacy</h3>
                                <p>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
                                <p>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
                                <div>
                                    <a href="" className='a'>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionFive