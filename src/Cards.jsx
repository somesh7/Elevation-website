import React from 'react';

const Cards = (props) => {
    return (<> 
    
                <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{width:"25rem", height: "25rem"}}>
  <img src={props.imgsrc} className="card-img-top" alt="nice_pic" />
  <div className="card-body">
    <h1 className="card-title">{props.title}</h1>
   
    <p className="card-text"> {props.text} </p>
  </div>
</div>
        </div>
        
                </>
    );
    
}
export default Cards;