import React from "react";

function Namesearch() {
    return (
        <div className="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <input type="text" className="form-control" placeholder="First Name"></input>
                    <input type="text" className="form-control" placeholder="Last Name"></input>           
                </div>
            </div>
        </div>
    )
}

export default Namesearch;