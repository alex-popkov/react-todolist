import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Layout from '../layout/layout';
import './stylesheets/app.css';

/**
 * Application component.
 **/

class App extends Component{

  /**
   * Render application element
   * @return {Element}
   **/
  render( ){

    return(

      <div
          className="app">
          <Layout />
      </div>
    );
  }
}

export default App;
