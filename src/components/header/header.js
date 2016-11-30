import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/header.css';

class Header extends Component{

  render( ){

    return(

        <div
            className="header">
            <div
                className = "header--title">
                TODO list app
            </div>
        </div>
    );
  }
}

export default Header;
