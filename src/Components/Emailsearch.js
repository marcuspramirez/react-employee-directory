import React from "react";

function EmailSearch() {
    return (
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
            <div className="input-group-prepend">
                    <input type="email" className="form-control" placeholder="Email"></input>
                    <button>Search</button>            
                </div>
            </div>
        </div>
    )
}

export default EmailSearch;