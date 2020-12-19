import React from "react";

const Cards1 = (props) => {
    return (
        <>
           <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{width:"25rem", height: "25rem"}}>
  <img src={props.imgsrc1} className="card-img-top" alt="nice_pic" />
  <div className="card-body">
    <h1 className="card-title">{props.title1}</h1>
   
    <p className="card-text"> {props.text1} </p>
  </div>
</div>
        </div>
        </>
    );
}
export default Cards1;