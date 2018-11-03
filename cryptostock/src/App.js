import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Array
//var currencies = ["hui"] ;
import currencies from './cryptocurrencies'
import Ticker from './Ticker/Ticker'
class App extends Component {

  //Ставим изначальный state
  state = {
    selectedPairs: [],
  };

  //Сработка на клик
  handleCheckbox = currency => (event) => {



    //равносильно const checked = event.target.checked;
    const { checked } = event.target;




    this.setState(({ selectedPairs, activePairs }) => {

      //спреадоператор Все что было в массиве положил в новый массив
      let pairs = [...selectedPairs];

      if (checked) {
        pairs.push(currency);
        console.log(pairs);
      } else {
        pairs = pairs.filter(pair => pair !== currency);
      }

      return {
        selectedPairs: pairs,
      }
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Крипто биржа</h1>
        </header>
        <aside>
          <ul className="currList">
            {/*Для каждого элемента массива currencies мы создаем <li>   */}
            {currencies.map(curr => (
              <li key={curr} className="currItem">
                <input type="checkbox" id={curr} onChange={this.handleCheckbox(curr)} />
                <label htmlFor={curr}>{curr.toUpperCase()}</label>
              </li>

            ))}
          </ul>
        </aside>

        <main>
          {this.state.selectedPairs.map(pair => <Ticker key={pair} pair={pair} isActive={this.state.activePairs} />)}


        </main>
      </div>
    );
  }
}

export default App;
