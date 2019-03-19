import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ArtistCard } from './card';

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    rate: ''
  }
}

  handleChangeRate = (state) => {
    debugger
    this.setState({rate: state})
  }


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header> */}
        <ArtistCard artist={'artist'} key={'index'} rating={this.state.rate} deleteArtist={this.deleteArtist} onChangeRating={this.handleChangeRate}  />
      </div>
    );
  }
}

export default App;
