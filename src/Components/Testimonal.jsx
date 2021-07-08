import React from 'react';
import Testimonal from './Images/testimonal.jpg';
import { Carousel } from 'react-bootstrap';

const testimonal = () => {
    return (
        <>
            <div className="testimonial-container my-5">
                <div className="container">
                    <h6 className="text-center">THOUGHTS ON HICODER SYLLABUS</h6>
                    <h1 className="text-center mb-5">Reviews by Industry Experts</h1>
                    <div className="row media-testimonal-row">
                        <div className="col-md-6">
                            <img src={Testimonal} alt=" Testimonal Background " className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                       
                            <Carousel>
                            <Carousel.Item>
                            <div className="testimonal d-flex justify-content-center align-items-center flex-column">
                                <i class="fas fa-quote-left my-4"></i>
                                <p>HiCoder didn't exist 15 years ago when I was preparing <br /> for software engineering career. In 2002, I had to pay <br /> hefty to get basic technical training. Good to see that <br /> HiCoder is removing the barrier of high tuition fee and <br /> encouraging students towards product focused <br /> learning than just teaching specific programming <br /> language that generally gets outdated.</p>
                                <h3 className="mt-4">Srikant Rahul</h3>
                                <p className="mb-5">Technical Architect, Hexaware Technologies</p>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="testimonal d-flex justify-content-center align-items-center flex-column">
                                <i class="fas fa-quote-left my-4"></i>
                                <p>HiCoder didn't exist 15 years ago when I was preparing <br /> for software engineering career. In 2002, I had to pay <br /> hefty to get basic technical training. Good to see that <br /> HiCoder is removing the barrier of high tuition fee and <br /> encouraging students towards product focused <br /> learning than just teaching specific programming <br /> language that generally gets outdated.</p>
                                <h3 className="mt-4">Sudhir Kumar</h3>
                                <p className="mb-5">Technical Lead, HARMAN International</p>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="testimonal d-flex justify-content-center align-items-center flex-column">
                                <i class="fas fa-quote-left my-4"></i>
                                <p>HiCoder didn't exist 15 years ago when I was preparing <br /> for software engineering career. In 2002, I had to pay <br /> hefty to get basic technical training. Good to see that <br /> HiCoder is removing the barrier of high tuition fee and <br /> encouraging students towards product focused <br /> learning than just teaching specific programming <br /> language that generally gets outdated.</p>
                                <h3 className="mt-4">Tapas Adhikary</h3>
                                <p className="mb-5">UI/UX, Micro Focus</p>
                            </div>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default testimonal;
