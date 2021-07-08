import React from 'react';
import { Card } from 'react-bootstrap';
import newsimg1 from './Images/newsimg1.jpg';
import newsimg2 from './Images/newsimg2.jpg';
import newsimg3 from './Images/newsimg3.jpg';
import Newsbloglogo from './Images/newsbloglogo.png'

const News = () => {
    return (
        <>
            <div className="news-container my-5">
             <p className="text-center">NEWS</p>
            <h1 className="text-center my-5">#COVID19 Demands more full stack developers. <br /> <span> & Industry Updates</span></h1>
                <div className="container d-flex">
                    <div className="row media-news">
                        <div className="col-md-4">
                            <Card style={{ width: '22rem' }} className="news-card">
                                <Card.Img variant="top" src={newsimg1} />
                                <Card.Body>
                                    <Card.Text style={{fontWeight:"700",fontSize:"20px"}}>
                                        <a href=" ">College education isn't <br /> enough to be relevant for the <br /> tech Industry. </a>
                        
                                    </Card.Text>
                                    <div className="news-user d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src={Newsbloglogo} alt="newsLogo" className="img-fluid" />
                                            <p className="mt-3 ml-2">HiCoder</p>
                                        </div>
                                        <div>
                                        <p className="pt-3">17 Oct 2020</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card style={{ width: '22rem' }} className="news-card">
                                <Card.Img variant="top" src={newsimg2} />
                                <Card.Body>
                                    <Card.Text style={{fontWeight:"700",fontSize:"20px"}}>
                                    <a href=" "> IT project demand increases <br /> by 127% as offline businesses <br /> shut down. </a>
                                    </Card.Text>
                                    <div className="news-user d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src={Newsbloglogo} alt="newsLogo" className="img-fluid" />
                                            <p className="mt-3 ml-2">HiCoder</p>
                                        </div>
                                        <div>
                                        <p className="pt-3">17 Oct 2020</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card style={{ width: '22rem' }} className="news-card">
                                <Card.Img variant="top" src={newsimg3} />
                                <Card.Body>
                                    <Card.Text style={{fontWeight:"700",fontSize:"20px"}}>
                                        <a href=" "> 13 reasons why businesses <br /> love hiring failed <br /> entrepreneurs. </a>
                                    </Card.Text>
                                    <div className="news-user d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src={Newsbloglogo} alt="newsLogo" className="img-fluid" />
                                            <p className="mt-3 ml-2">HiCoder</p>
                                        </div>
                                        <div>
                                            <p className="pt-3">17 Oct 2020</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
