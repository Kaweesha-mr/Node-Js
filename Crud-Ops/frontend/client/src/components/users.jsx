/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([
        {
            name: "Rahul",
            email: "Kawees@gmail.com",
            age: 20,
        },
    ]);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success"> Add User </Link>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={'/update'} variant="primary" className="btn btn-success">Edit</Link>
                                <Link to={'/delete'} variant="danger" className="btn btn-danger">Delete</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;