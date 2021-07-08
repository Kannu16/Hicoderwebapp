import React from 'react'
import Partner1 from './Images/partner1.jpg';
import Partner2 from './Images/partner2.jpg';
import Partner3 from './Images/partner3.jpg';
import Partner4 from './Images/partner4.jpg';

const Partner = () => {
    return (
       <>
         <div className="partner-container pb-5">
         <h1 className="text-center p-1">Partner & Associates</h1>
             <div className="container my-5">
                 <div className="row">
                     <div className="col-md-3 media-partner">
                        <a href=" ">  <img src={Partner1} alt="Brand bg" className="img-fluid"/> </a>
                     </div>
                     <div className="col-md-3 media-partner">
                      <a href=" "> <img src={Partner2} alt="Brand bg" className="img-fluid"/> </a>
                     </div>
                     <div className="col-md-3 media-partner">
                      <a href=" "> <img src={Partner3} alt="Brand bg" className="img-fluid"/> </a>
                     </div>
                     <div className="col-md-3 media-partner">
                        <a href=" "> <img src={Partner4} alt="Brand bg" className="img-fluid"/> </a>
                     </div>
                 </div>
             </div>
         </div>

       </>
    )
}

export default Partner;
