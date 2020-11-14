import React from "react";
import "../styles/EmailSearch.css";











function Namesearch() {
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                <div className="input-group-prepend">
                    <input type="text" className="form-control" placeholder="First Name"></input>
                    <input type="text" className="form-control" placeholder="Last Name"></input>
                    <button>Search</button>           
                </div>
            </div>
        </div>
    )
}

export default Namesearch;