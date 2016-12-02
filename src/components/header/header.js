import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/header.css';

class Header extends Component{

    constructor( props ){

        super( props );

        this.state = {

            title: 'TODO list app'
        };

        autoBind( this );
    }

/**
 * Render header element.
 * @return {Element}
 **/
  render( ){

    return(

        <div
            className="header">
            <div
                className = "header--title">
                {this.state.title}
            </div>
        </div>
    );
  }
}

export default Header;
