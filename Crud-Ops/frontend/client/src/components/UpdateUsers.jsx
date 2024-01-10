/* eslint-disable no-unused-vars */
import React from "react";

export default function UpdateUsers() {
    return (
        <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">

            
            <div className="w-75 bg-white rounded p-3">
                <form>
                <h1>Update User</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Enter age" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update User</button>
                </form>
            </div> 

        </div>
    )
}