import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Register extends React.Component {

    render() {

        return (<div>

            <h1>Register</h1>
            <Link
             to="/addcustomer"className="btn btn-info btn-large   mb-2 mt-2">Click to register</Link>
        </div>

        );

    }

}



export default Register;