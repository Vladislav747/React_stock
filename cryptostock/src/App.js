import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery'; 
//Array
import currencies from './cryptocurrencies'
import Ticker from './Ticker/Ticker'
class App extends Component {

  //Ставим изначальный state
  state = {
    selectedPairs: [],
    activePairs: [],
    currenciesList: [],
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
        //Если отсутсвует галочка(checked ) то убираем этот элемент из массива
       //currency значение элемента валюта - сравниваем с каждым элементом массива 
       //чтобы не один не равнялся ему и тогда убираем
        pairs = pairs.filter(pair => pair !== currency);
      }

      //Возвращаем state который положили
      return {
        selectedPairs: pairs,
      }
    })
  };


//В далнейшем для интерактивного вывода с API
  getCurrenciesApi() {
    
    let responseMap;
    return fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
      .then((response) => response.json())
      .then((responseJson) => { 
        responseMap = responseJson.data;
          console.log('getCurrenciesApi ' + responseMap)  
            
        return responseMap;
       })
       .then(res => {
        
        this.setState({
        currenciesList: res,
        });   
        console.log(this.state.currenciesList)
       })

      
      .catch((error) => {
        console.error(error);
      })
    
  
}  
    

componentDidMount(){
  //this.getCurrenciesApi();
  let currenciesList = this.state.currenciesList;
}


    

  render() {
 if(this.state.currenciesList){
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
        {/* Здесь будет выводиться список элементов которые были КЛИКнуты*/}
          {this.state.selectedPairs.map(pair => <Ticker key={pair} pair={pair} isActive={this.state.activePairs} />)}


        </main>
       
      </div>
    );
  }
}

export default App;
