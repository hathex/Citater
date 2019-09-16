import React, { Component } from 'react';
import Citater from './Citater';
import AddCitate from './AddCitate';

class App extends Component {
  state = {
    Citater: [
      { title: 'Living ', text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', author: '-Nelson Mandela', id: 1 },
      { title: 'Communication', text: '"The way to get started is to quit talking and begin doing."', author: '-Walt Disney', id: 2 },
      { title: 'Live your life ', text: '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."', author: '-Steve Jobs', id: 3 },
      { title: 'Life ', text: '"If life were predictable it would cease to be life, and be without flavor."', author: '-Eleanor Roosevelt', id: 4 },
      { title: 'always want more', text: '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough."', author: '-Oprah Winfrey', id: 5 },
      { title: 'Success', text: '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success."', author: '-James Cameron', id: 6 }
    ]
  }
  addCitate = (Citate) => {
    Citate.id = Math.random();
    let Citater = [...this.state.Citater, Citate];
    this.setState({
      Citater: Citater
    })
  }
  deleteCitate = (id) => {
    let Citater = this.state.Citater.filter(Citate => {
      return Citate.id !== id
    });
    this.setState({
      Citater: Citater
    })
  }
  render() {
    return (
      <div classtitle="App">
        <div className="jumbotron">
          <h1 className="text-center">The 6 Most Famous Quotes of All Time</h1>
          <p className="text-center">Quotes by Famous People</p>
        </div>
        <Citater deleteCitate={this.deleteCitate} Citater={this.state.Citater} />
        <AddCitate addCitate={this.addCitate} />
      </div>
    );
  }
}

export default App;
