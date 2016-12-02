import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/list.css';


/**
 * List component
 **/
class List extends Component{

    constructor( props ){

        super( props );

        this.state = {

            texts: [ 'test1', 'test2' ]
        };

        autoBind( this );
    }

/**
 * Render list element.
 * @return {Element}
 **/
    render( ){

        return(

          <div>
              { this.state.texts.map( text => this.renderList( text ) ) }
          </div>
        );
    }

/**
 * Render list item element.
 * @param {string} text
 * @return {element}
 **/
    renderList( text ){

        return(

            <div
                className="list">
                {text}
            </div>
        );
    }
}

export default List;
