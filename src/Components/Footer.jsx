import React from 'react';
import HiiCoder from './Images/Hi_coder.png'
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
       <>
         <div className="footer-container">
             <div className="container">
                 <div className="row pt-5 media-footer">
                     <div className="col-md-4">
                         <img src={HiiCoder} alt="HicoderLogo"/>
                         <p className="my-5">HiCoder enables students in being capable to <br /> develop production grade application by availing <br /> full stack development, Soft skills, Analytics and <br /> project management skills to get a core software <br /> job in the Industry.</p>
                         <Button> APPLY NOW </Button>
                     </div>
                     <div className="col-md-2"></div>
                     <div className="col-md-2">
                         <h3>Info</h3>
                         <ul  className="my-5">
                             <li>
                                 <a href=" ">Home</a>
                            </li>
                             <li>
                                 <a href=" ">About</a>
                             </li>
                             <li>
                                 <a href=" ">Blog</a>
                             </li>
                             <li>
                                 <a href=" ">FAQ</a>
                             </li>
                             <li>
                                 <a href=" ">Contact</a>
                             </li>
                         </ul>
                     </div>
                     <div className="col-md-4">
                         <h3>Contact</h3>
                         <div className="my-5">
                         <p > 264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033 </p>
                         <h6>(+91) 9206 980 980</h6>
                         <h6> <a href=" "> admission@hicoder.in </a> </h6>
                         <h6>10:00AM - 06:00PM</h6>
                    </div>
                     </div>
                 </div>
                 <hr className="mt-5" />
                 <div className="d-flex justify-content-between media-footer text-center" >
                     <div>
                     <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved. <br /> <a className="text-primary" href=" ">Privacy Policy</a> | <a className="text-primary" href=" ">Terms of Service</a> | * Registration Charges Applied</p>
                     </div>
                     <div className="footer-icon d-flex align-items-center justify-content-center"> 
                        <a href=" "><i class="fab fa-facebook"></i></a>
                        <a href=" "><i class="fab fa-instagram"></i></a>
                        <a href=" "><i class="fab fa-twitter"></i></a>
                        <a href=" "><i class="fab fa-linkedin"></i></a>
                     </div>
                 </div>
             </div>
         </div>
       </>
    )
}

export default Footer
