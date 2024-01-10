/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateUsers() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        axios.get("http://localhost:3001/getuser/"+id)
        .then((result)=> {
            console.log(result)
            setAge(result.data.age)
            setName(result.data.name)
            setEmail(result.data.email)
        })
        .catch((err)=> console.log(err))
    },[])


    const update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {name,email,age })
        .then((result) => {
            console.log(result)
            navigate('/')
        })
        .catch((err) => console.log(err))
    }
    
    
    return (

        

        <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">

            
            <div className="w-75 bg-white rounded p-3">
                <form onSubmit={update}>
                <h1>Update User</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update User</button>
                </form>
            </div> 

        </div>
    )
}