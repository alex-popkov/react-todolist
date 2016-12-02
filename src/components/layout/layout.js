import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import List from '../list/list';
import './stylesheets/layout.css';

class Layout extends Component{

    constructor( props ){

        super( props );

        autoBind( this );
    }

/**
 * Render layout element.
 * @return {Element}
 **/
  render( ){

    return(

      <div
          className="layout">
          <Header />
          <Navigation />
          <List />
      </div>
    );
  }
}

export default Layout;
