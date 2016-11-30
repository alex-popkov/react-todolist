import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Header from '../header/header';
import List from '../list/list';
import './stylesheets/layout.css';

class Layout extends Component{

  render( ){

    return(

      <div
          className="layout">
          <Header />
          <List />
          <List />
      </div>
    );
  }
}

export default Layout;
