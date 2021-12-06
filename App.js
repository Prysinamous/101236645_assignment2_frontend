
import React, {Component} from 'react';
import axios from 'axios'

import {Link} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import './pretty.css';

export default class App extends Component
{
  
// constructor(props)
// {
//     super(props);

//     this.state=
//     {
//         employees: []
//     }
// }

componentDidMount()
{
  this.state=
  {


      employees: [{
        "firstName": "John",
        "lastName": "Smith",
        "emailId": "john@smith.com"
    }]
  }

    // axios.get('http://localhost:9090/api/v1/employees/'
    //     .then(response =>
    //         {
    //             this.setState({employees : response.data})
    //             console.log(response.data)
    //         })

    //     .catch(function(error)
    //     {
    //         console.log(error)
    //     })

    //     )
}

render()
{
  return (
    // <div>
    //   <h1>Employee's first name: {this.state.firstName}</h1>
    //   <h1>Employee's last name: {this.state.lastName}</h1>
    // </div>
    <div>
   <h1>***All Employees***</h1>
    <h1>Employee's first name: John</h1>
   <h1>Employee's last name : Smith </h1>
    <h1>Email: johnsmith@hotmail.com</h1>
  
  </div>
  )
}

}
