import React from 'react';
import ChooseBg from './Images/whyhicoder.jpg';
import ChooseBg2 from './Images/whyhighcoder2.jpg';
import Whychoose1 from './Images/whychoose1.png';
import Whychoose2 from './Images/whychose2.png';
import {Button} from "react-bootstrap";

export const Whychoose = () => {
    return (
        <>
            <div className="whychoose-container mt-5">
                <div className="container">
                    <div className="row media-whychoose">
                        <div className="col-md-6">
                            <h1>Why HiCoder?</h1>
                            <p className="mb-5">HiCoder enables students to think about real-world problems, <br /> design, and develop the right solution. <a href=" "> Know more </a> </p>

                            <div className="d-flex justify-content-center">
                            <img src={Whychoose1} alt=" background" className="whychooselogo mr-5" />
                               <div>
                               <h2>Personalized Training</h2>
                                 <p>We understand the weakness of students coming <br /> from poor educational backgrounds. HiCoder avails <br /> resources and extra after-class support to match <br /> the criteria and keep up with tech.</p>
                               </div>
                            </div>

                           <div className="d-flex justify-content-center" >
                           <img src={Whychoose2} alt=" background" className="whychooselogo mr-5"/>
                           <div>
                           <h2>Production Projects</h2>
                            <p>Every student ends up making around 3 projects <br /> that are wholesome, cloud-hosted and can be used <br /> for a commercial purpose.</p>
                           </div>
                           </div>

                        </div>
                        <div className="col-md-6">
                            <img src={ChooseBg} alt=" Why to choose high coder bg" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row mt-5 media-whychoose">
                        <div className="col-md-6">
                           <img src={ChooseBg2 } alt=" background " className="img-fluid"/>
                        </div>
                        <div className="col-md-6 my-5 ">
                               <h2>How does HiCoder help?</h2>
                               <h5 className="my-4" style={{fontWeight:"600",color:"#777"}}>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</h5>
                               <p>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</p>
                               <Button className="pl-4 pr-4 pt-3 pb-3 mt-3"> KNOW MORE </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Whychoose;