import React from 'react'
import { Laptop, PersonFill, PersonWorkspace, BuildingsFill, BriefcaseFill, QuestionLg, Award, BookFill } from "react-bootstrap-icons";

function SectionSix() {
    return (
        <>
            <div className='content-6 w-100'>
                <div className='sqi-study-div mx-auto'>
                    <h2>Why study at SQI?</h2>
                </div>
                <div className='d-flex dd mx-auto flex-wrap mt-5'>
                    <div className='d-flex wid-size me-5 mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <Laptop className='laptop-icon fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Project Based Learning</h4>
                            <p>Our courses are practical, hands-on learning. Practice and apply knowledge faster with real-world Web Development projects you can show off.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size me-5 mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <PersonFill className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Expert Instructors</h4>
                            <p>Get to interact with different mentors and draw from their loads of experience.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <PersonWorkspace className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Physical & Virtual Class</h4>
                            <p>You can now choose physical class experience or online classroom and learn from anywhere in the world.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size me-5 mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <BuildingsFill className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Free access to our hub and community</h4>
                            <p>You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size me-5 mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <BriefcaseFill className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Job Opportunity</h4>
                            <p>78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size mb-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <QuestionLg className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Alumni Support</h4>
                            <p>Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size me-5'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <Award className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Certification</h4>
                            <p>Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.</p>
                        </div>
                    </div>
                    <div className='d-flex wid-size'>
                        <div className='me-3'>
                            <span className='icon-div bg-white d-flex align-items-center justify-content-center rounded-4'>
                                <BookFill className='fs-3'/>
                            </span>
                        </div>
                        <div>
                            <h4>Access to study materials</h4>
                            <p>Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionSix