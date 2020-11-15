import React from "react";

function EmailSearch() {
    return (
        
        <div className="text-white">
            <div className="input-group-prepend">
                    <input type="email" className="form-control" placeholder="Email"></input>
                    <button onClick={() => console.log("Button Clicked!")}>Search</button>            
                </div>
            </div>
       
    )
}

export default EmailSearch;