import React from 'react'
import  NewBatch  from './NewBatch';
import { Button } from 'react-bootstrap';

const Section = () => {
    return (
        <>
       <div className="section-container">
           <div className="container">
           <div className="row">
               <div className="col-md-8">
                   <p>YOUR TIME, OUR EFFORTS</p>
                    <h2>Pay After Job Full Stack Development Course</h2>
                    <Button className="mt-5"> KNOW MORE </Button>
               </div>
           </div>
         </div>
       </div>
        <NewBatch />
        </>
    )
}

export default Section;
