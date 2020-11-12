import React from "react";

function EmailSearch() {
    return (
        <div className="container">
            <div className="input-group">
                <div className="input-group-prepend">
                    <input type="email" className="form-control" placeholder="Email"></input>        
                </div>
            </div>
        </div>
    )
}

export default EmailSearch;