import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/navigation.css';


/**
 * Navigation component
 **/
class Navigation extends Component{

    constructor( props ){

        super( props );

        this.state = {

            texts: [ 'test1', 'test2' ]
        };

        autoBind( this );
    }

/**
 * Render Navigation element.
 * @return {Element}
 **/
    render( ){

        return(

          <div
            className = "navigation">
              { this.state.texts.map( text => this.renderNavigation( text ) ) }
          </div>
        );
    }

/**
 * Render Navigation item element.
 * @param {string} text
 * @return {element}
 **/
    renderNavigation( text ){

        return(

            <div
                className = "navigation-item">
                {text}
            </div>
        );
    }
}

export default Navigation;
