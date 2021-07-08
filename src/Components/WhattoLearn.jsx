import React from 'react';
import Frontend from './Images/frontend.png'
import Backend from './Images/backend.png'
import Projectmanagement from './Images/projectmanagement.png';
import Productiondeployment from './Images/productiondeployment.png'
import Basicanalytic from './Images/basicanalytics.png';
import Softskills from './Images/softskills.png';
import Industrystandards from './Images/Industrystandards.png';
import Maxproresume from './Images/maxproresume.png';



const WhattoLearn = () => {
    return (
       <>
           <div className="whtatolearn-container my-5">
               <div className="container">
                   <p className="text-center">WHAT YOU LEARN</p>
                   <h1 className="text-center mb-5">at HiCoder is useful <br /> <span>Technology, Management & more</span> </h1>
                   <div className="row media-wtlearn-row">
                       <div className="col-md-3 align-items-center d-flex flex-column">
                           <img src={Frontend} alt="Frontend bg" className="mb-5"/>
                           <h5>Front End</h5>
                           <p>Students learn to design, <br /> develope the UI following UX <br /> with industry standards.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                           <img src={Backend} alt="Backend bg " className="mb-5"/>
                           <h5>Backend</h5>
                           <p>Students learn CS Architecture, <br /> CRUD, API, Authentication, <br /> Authorization, DB and etc.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                       <img src={Projectmanagement} alt="Projectmanagement bg " className="mb-5"/>
                           <h5>Project Management</h5>
                           <p>Students learn to plan, project, <br /> and execute development <br /> projects with client expectation.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                       <img src={Productiondeployment} alt="Productiondeployment bg " className="mb-5"/>
                           <h5>Production Deployment</h5>
                           <p>Students learn to create a <br /> server, deploy an application <br /> following security guidelines.</p>
                       </div>
                   </div>

                   <div className="row my-5 media-wtlearn-row">
                       <div className="col-md-3 align-items-center d-flex flex-column">
                           <img src={Basicanalytic} alt="Basicanalytic bg" className="mb-5"/>
                           <h5>Basic Analytics</h5>
                           <p>Students learn about analytics, <br /> usability, and integration of <br /> analytics in their production <br /> application.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                           <img src={Softskills} alt="Softskills bg " className="mb-5"/>
                           <h5>Soft Skills</h5>
                           <p>Soft skills encourages open <br /> communication & enhances <br /> corporate skills having <br /> corporate attitude.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                       <img src={Industrystandards} alt="Industrystandards bg " className="mb-5"/>
                           <h5>Industry Standards</h5>
                           <p>Industry Trending technology, <br /> tools, and process adaption help <br /> students adapt to corporate <br /> with almost no effort.</p>
                       </div>
                       <div className="col-md-3 align-items-center d-flex flex-column">
                       <img src={Maxproresume} alt="Maxproresume bg " className="mb-5"/>
                           <h5>Max Pro Resume</h5>
                           <p>Students get a unique HiCoder <br /> smart ID, Certificate, and an <br /> industry expert-guided self <br /> developed integrated resume.</p>
                       </div>
                   </div>
               </div>
           </div>

       </>
    )
}

export default WhattoLearn
