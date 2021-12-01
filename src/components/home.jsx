import React, { Component } from 'react';
import{Link} from "react-router-dom"
import Nav from './nav';

class Home extends React.Component
 {
    render() { 
        return( <div>
          <h2 className="mt-5">Welcome to wallet Payment App</h2>
        </div>
        );
    }
}
 
export default Home;