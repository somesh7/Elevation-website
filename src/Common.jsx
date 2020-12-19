import React from "react";
import {NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Common = () => {
    return (
        <>
         <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">  
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center">
                        <h3 className="design"> OUR PARTNERSHIP WITH VISIONARY FOUNDERS TAKES US ON <strong className="bold_div"> <br /> PATH-BREAKING JOURNEYS. </strong></h3>
                        
                        
                    </div>
               
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="parent_div">
    <figcaption>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title"> PAYTM</h5>
    <p className="card-text">India's largest internet ecosystem,bringing hundreds of millions into the mainstream economy.</p>
    <NavLink to="#" className="btn btn-link"> Read the Paytm Story </NavLink>
  </div>
</div>
  </figcaption>
		<div className="child_div">
       
</div>			
		</div>
  <div className="parent_div1">
  <figcaption>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title"> SWIGGY</h5>
    <p className="card-text">Becoming India's most loved delivery service,for more than just food.</p>
    <NavLink to="#" className="btn btn-link"> Read the Swiggy story </NavLink>
  </div>
</div>
  </figcaption>
		<div className="child_div1">
       
</div>			
		</div>
  <div className="parent_div2">
  <figcaption>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">  URBAN COMPANY</h5>
    <p className="card-text">World class services, Delivered at home.</p>
    <NavLink to="#" className="btn btn-link"> Read the Urban Company Story  </NavLink>
  </div>
</div>
  </figcaption>
		<div className="child_div2">
       
</div>			
		</div>
        <div className="parent_div3">
  <figcaption>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">  MEESHO</h5>
    <p className="card-text">Social commerce pioneer,empowering millions of women entrepreneurs.</p>
    <NavLink to="#" className="btn btn-link"> Read the Meesho Story  </NavLink>
  </div>
</div>
  </figcaption>
		<div className="child_div3">
       
</div>			
		</div>
        <div className="parent_div4">
  <figcaption>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title"> SHARECHAT</h5>
    <p className="card-text">Bharat's gateway to the internet.</p>
    <NavLink to="#" className="btn btn-link"> Read the Sharechat Story  </NavLink>
  </div>
</div>
  </figcaption>
		<div className="child_div4">
       
</div>			
		</div>
    <div className="container-fluid1">
        <div className="link-div">
                        <h3 className="design1"> TEAM </h3>
                        <p> Our team commits to helping founders go beyond.</p>
                        <NavLink className="btn btn-dark" to="/team" role="button"> Team</NavLink>
                           </div>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#30B8B8" fill-opacity="1" d="M0,256L1440,64L1440,0L0,0Z"></path></svg>
                           </div>
               
        </>
    );
}

export default Common;