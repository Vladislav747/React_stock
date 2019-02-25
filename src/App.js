import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';
import { Checkbox, Segment } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
//Staic Array
import currencies from './api/cryptocurrencies';
import Ticker from './components/Ticker';
class App extends Component {

  //Ставим изначальный state
  state = {
    selectedPairs: [],
    activePairs: [],
    currenciesList: [],
  };

  //Сработка на клик
  handleCheckbox = currency => (event) => {
    const { checked } = event.target;
    this.setState(({ selectedPairs, activePairs }) => {
      let pairs = [...selectedPairs];
      if (checked) {
        pairs.push(currency);
        console.log(pairs);
      } else {
        pairs = pairs.filter(pair => pair !== currency);
      }
      //Возвращаем state который положили
      return {
        selectedPairs: pairs,
      }
    })
  };


  

  componentDidMount() {
    let currenciesList = this.state.currenciesList;
  }

  render() {
    if (this.state.currenciesList) {
      let currenciesList = this.state.currenciesList;
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Крипто биржа</h1>
        </header>
        <aside>
          <ul className="currList">
            {currencies.map(curr => (
              <li key={curr} className="currItem">
                <Segment compact>
                  <Checkbox toggle id={curr} onChange={this.handleCheckbox(curr)}></Checkbox>  <label className="currenciesLabel" htmlFor={curr}>{curr.toUpperCase()}</label>
                </Segment>
              </li>
            ))}
          </ul>
        </aside>

        <main>
          <Card.Group>
            {this.state.selectedPairs.map(pair =>
              <Card>
                <Ticker className="currenciesTicker" key={pair} pair={pair} isActive={this.state.activePairs} />
              </Card>
            )}
          </Card.Group>
        </main>

      </div>
    );
  }
}

export default App;
