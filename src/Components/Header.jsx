import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="container">
                    <div className="d-flex header">
                        <div className="left-header">
                            <a className="text-white" href=" "> <i className="fa fa-envelope" ></i> admission@hicoder.in</a>
                            <a className="ml-5 text-white" href=" "> <i className="fa fa-mobile" ></i> (+91) 9206 980 980 </a>
                        </div>
                        <div className="right-header d-flex align-items-center">
                            <p className="text-white mt-3 mr-5 ">  Mon - Fri: 10:00am - 06.00pm</p>
                            <a className="text-white m-2" href=" "><i class="fab fa-facebook"></i></a>
                            <a className="text-white m-2" href=" "><i class="fab fa-instagram"></i></a>
                            <a className="text-white m-2" href=" "><i class="fab fa-twitter"></i></a>
                            <a className="text-white m-2" href=" "><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
