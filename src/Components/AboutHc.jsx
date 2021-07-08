import React from 'react';
import Highcoder1 from '../Components/Images/highcoder_1.jpg';
import Highcoder2 from '../Components/Images/highcoder_2.jpg';
import { Button } from 'react-bootstrap';
export const AboutHc = () => {
    return (
        <>
            <div className="abouthc-container mt-5">
                <div className="container">
                    <div className="row fullstack-row">
                        <div className="col-md-6 fullstack-col">
                            <img src={Highcoder1} alt="FullstackDevelopment" className="img-fluid" />
                        </div>
                        <div className="col-md-6 about-fullstack-text">
                            <p style={{ color: "grey" }}>HIGH CODER</p>
                            <h2>We help students learn <br />  <span>  Full Stack Development. </span></h2>
                            <p class="fullstack-text mt-4">HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
                        </div>
                    </div>

                    <div className="row mt-5 fullstack-row">
                        <div className="col-md-6 technology-skill fullstack-col">
                            <h2>Trained on the most in-demand Technology Skills</h2>
                            <p class="fullstack-text mt-4 mb-4">At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>

                           
                                <p> <i class="fas fa-check-square check-icon"></i> End to End Project Analysis, Design & Development</p>
                                <p> <i class="fas fa-check-square check-icon"></i>Authentication, Geo Tracking, Payment Gateway</p>
                                <p> <i class="fas fa-check-square check-icon"></i>Analytics, SEO, Data Representation, Industry Standards</p>
                                <p> <i class="fas fa-check-square check-icon"></i>Max Pro Resume, Soft Skills, Client Expectation Management</p>
                           

                            <Button className="pl-5 pr-5 pt-2 pb-2 mt-4">Apply Now</Button>
                        </div>
                        <div className="col-md-6">
                            <img src={Highcoder2} alt="FullstackDevelopment" className="img-fluid mt-5" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AboutHc;