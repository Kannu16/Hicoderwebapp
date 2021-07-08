import React from 'react'
import Counter1 from './Images/counter1.png';
import Counter2 from './Images/counter2.png';
import Counter3 from './Images/counter3.png';
import Counter4 from './Images/counter4.png';

const Webcounter = () => {
    return (
        <>
           <div className="counter-wavebg-container mt-5">
              <div className="container">
                  <div className="row counter-row">
                      <div className="col-md-3 counter-col">
                          <img src={Counter1} alt="Project Completed" className="counter-icon" />
                          <h2>34+</h2>
                          <p> Project Completed </p>
                      </div>
                      <div className="col-md-3 counter-col">
                        <img src={Counter2} alt="Industry Experts" className="counter-icon" />
                        <h2>47+</h2>
                        <p> Industry Experts </p>
                      </div>
                      <div className="col-md-3 counter-col">
                        <img src={Counter3} alt="Quality Developers" className="counter-icon" />
                        <h2>30+</h2>
                        <p> Quality Developers</p>
                      </div>
                      <div className="col-md-3 counter-col">
                        <img src={Counter4} alt="application users" className="counter-icon" />
                          <h2>40,000,00 +</h2>
                          <p>application users</p>

                      </div>
                  </div>
              </div>
           </div> 
        </>
    )
}

export default Webcounter;
