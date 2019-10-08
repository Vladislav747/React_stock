import React, { Component } from 'react';
import logo from '../logo.svg';

import '../css/App.css';
import '../css/style.css';
import { Checkbox, Segment } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

import currencies from '../utils/cryptocurrencies';
import Ticker from '../components/Ticker';
import CustomModal from '../components/CustomModal';

export default class App extends Component {

    constructor() {
      super();
      this.state = {
        selectedPairs: [],
        currenciesList: currencies,
      };
    }
  
    handleCheckbox = currency => (event) => {
      const { checked } = event.target;
      this.setState(({ selectedPairs }) => {

        let pairs = [...selectedPairs];

        if (checked) {
          pairs.push(currency);
        } else {
          pairs = pairs.filter(pair => pair !== currency);
        }

        return {
          selectedPairs: pairs,
        }
      })
    }





  
    render() {
  
      return (
        <div className="App">
          <header className="App-header">
            <img 
            src={logo} 
            className="App-logo" 
            alt="logo" />
            <h1 className="App-title">Крипто биржа</h1>
          </header>

          <CustomModal 
            modalText = "Ошибка"
           />
          <aside>
            <div className="currencies">
              <ul className="currList">
                {this.state.currenciesList.map(curr => (
                  <li key={curr} className="currItem">
                    <Segment compact>
                      <Checkbox 
                          toggle 
                          id={curr}
                          onChange={this.handleCheckbox(curr)}>
                      </Checkbox>
                      <label 
                          className="currenciesLabel" 
                          htmlFor={curr}>{curr.toUpperCase()}
                      </label>
                    </Segment>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
  
          <main>
            <Card.Group>
              {this.state.selectedPairs.map((pair, i) => 
                <Card key={i}>
                  <Ticker 
                    className="currenciesTicker" 
                    key={i}
                    pair={pair}
                   />
                </Card>
              )}
            </Card.Group>
          </main>
  
        </div>
      );
    }
  }