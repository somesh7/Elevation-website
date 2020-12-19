import React from "react";

const Launch = () => {
    return (
        <>
         <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">  
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center">
                        <h3 className="design"> GET IN TOUCH <strong className="bold_div"> <br /> SHARE YOUR VISION. </strong></h3>
                        <p className="launch_div"> We are constantly on the lookout for the next visionary founder to work with and the next big idea to brainstorm on. Whether you are a first time founder, a serial entrepreneur, or even someone considering embarking on a startup journey - it is never too early to get in touch. We look forward to hearing from you!</p>

                        <label for="demo">First Name:</label>
<div className="input-group mb-3 mt4">
  <input type="text" className="form-control" placeholder="Enter your first name" id="demo" name="text" />
</div>
                        
                        
                    </div>
               
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default Launch;