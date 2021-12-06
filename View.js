
import React, {Component} from 'react';
import axios from 'axios'

import {Link} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import './pretty.css';

export default class View extends Component
{
  

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

  
}

render()
{
  return (
  
    <p>
    <button type="button" class="temp">Delete</button>
    <button type="button" class="temp" >Update</button>

    </p>
  
  )
}

}
