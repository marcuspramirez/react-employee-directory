import React from "react";

function Bootstrap() {
    return (
        <div className="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">First and last name</span>
                    <input type="text" className="form-control"></input>
                    <input type="text" className="form-control"></input>
                    <br></br>
                    <div classNameName="container">

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Email Adress</span>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap;