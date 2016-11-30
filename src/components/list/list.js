import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './stylesheets/list.css';

class List extends Component{

    constructor( props ){

        super( props );

        this.state = {

            texts: [ 'test1', 'test2']
        };

        autoBind( this );
    }

    render( ){

        return(

          <div>
              { this.state.texts.map( text => this.renderList( text ) ) }
          </div>
        );
    }

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
