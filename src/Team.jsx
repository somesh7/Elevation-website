import React from 'react';
import Cards from "./Cards";
import  Datacards from "./Datacards";
import Dcards from "./Dcards";
import Cards1 from "./Cards1";
import {NavLink} from "react-router-dom";

const Team = () => {
    return(<>
     <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">  
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center">
                        <h3 className="design"> EVERYDAY OUR TEAM COMMITS TO HELPING FOUNDERS <strong className="bold_div"> <br /> GO BEYOND. </strong></h3>
                        
                        
                    </div>
               
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row gy-4">
                <h6 className="team_heading"> Investment Team</h6>
                {
           Datacards.map((val, index) => {
               return <Cards
               key={index}
               imgsrc={val.imgsrc}
               title={val.title}
               text={val.text}
               />
          
           })}
           </div>
           </div>
           </div>
           </div>
           <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row gy-4">
                <h6 className="team_heading"> Portfolio Services Team</h6>
                {
           Dcards.map((val, index) => {
               return <Cards1
               key={index}
               imgsrc1={val.imgsrc1}
               title1={val.title1}
               text1={val.text1}
               />
          
           })}
           </div>
           </div>
           </div>
           </div>
           <div className="container-fluid1">

           <div className="link-div">
                        <h3 className="design1"> CAREERS</h3>
                        <p> Every day we're looking for those who will take the world further.</p>
                        <NavLink className="btn2 btn-danger" to="/career" role="button"> Careers</NavLink>
                           </div>
                           </div>
     
    </>
    );
}
export default Team;