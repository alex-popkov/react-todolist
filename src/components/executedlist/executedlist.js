import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/executedlist.css';


/**
 * Executed list component
 **/
class ExecutedList extends Component{

    constructor( props ){

        super( props );

        this.state = {

            texts: [ 'Executed', 'test2' ]
        };

        autoBind( this );
    }

/**
 * Render Executed list element.
 * @return {Element}
 **/
    render( ){

        return(

          <div
            className = "list">
            { this.state.texts.map( text => this.renderExecutedList( text ) ) }
          </div>
        );
    }

/**
 * Render Executed list item element.
 * @param {string} text
 * @return {element}
 **/
    renderExecutedList( text ){

        return(

            <div
                className="list-item">
                { text }
            </div>
        );
    }
}

export default ExecutedList;
