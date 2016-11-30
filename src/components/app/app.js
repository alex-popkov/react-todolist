import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Layout from '../layout/layout';
import './stylesheets/app.css';

class App extends Component{

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
