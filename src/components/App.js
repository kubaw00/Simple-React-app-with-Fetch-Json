import React, { Component } from 'react';
import './App.css';
import Words from './Words';


class App extends Component {

  state = {
      words: [],
      isLoaded: false,
  }

componentDidMount(){
    setTimeout(this.getFetch, 4000)
}


getFetch = () =>{
  fetch('data/words.json')
  .then(res => res.json())
  .then(data => {
      this.setState({
        words: data.words,
        isLoaded: true,
      })
  })
}

  render() {
    const words = this.state.words.map(word => (
        <Words 
        key={word.id}
        polish={word.pl}
        english={word.en}
        />

    ))
    return (
      <ul>
        {this.state.isLoaded ? words : "Proszę czekać"}
      </ul>
    );
  }
}

export default App;

