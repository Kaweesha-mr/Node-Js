/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateUsers() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const navigate = useNavigate();



    const submit = (e) => {
        e.preventDefault();

        console.log(name, email, age);
        axios.post("http://localhost:3001/createUser",  {name, age,email} )
            .then((result) =>{ 
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err));
    }


    return (
        <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">


            <div className="w-75 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h1>Create User</h1>
                    <div className="form-group">
                        <label>Name</label>
                        
                        <input type="text"
                            className="form-control"
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        
                        <input type="number"
                            className="form-control"
                            placeholder="Enter age"
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Create User</button>
                </form>
            </div>

        </div>


    )
}