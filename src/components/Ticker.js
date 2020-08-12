
import React from 'react';

import '../css/Ticker.css';
import {getCurrency, getApiAbbreviationFromCurrency} from '../js/utility.js';

export default class Ticker extends React.Component {

  state = {
    value: 0,
  };

  constructor(props) {
    super(props);
    
    
  }

  /**
   *  //Получить данные о валюте с API https://cors-anywhere.herokuapp.com
  */
  getCurrency (currency) {
  return fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + currency + '&convert=USD', {
    headers: {
      'X-CMC_PRO_API_KEY': '523dd32d-0443-4acb-bad3-00dbab6f344d',
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      switch (currency) {

        case "BCH":
          return Math.round(responseJson.data.BCH.quote.USD.price-1);
  
        case "LTC":
          return Math.round(responseJson.data.LTC.quote.USD.price,-1);
  
        case "BTC":
          return Math.round(responseJson.data.BTC.quote.USD.price,-1);
  
        case "ETH":
          return  Math.round(responseJson.data.ETH.quote.USD.price,-1);
  
        case "XLM":
          return  Math.round(responseJson.data.XLM.quote.USD.price,-1);
  
        case "XRP":
          return Math.round(responseJson.data.XRP.quote.USD.price-1);
  
        default:
          break;
      }
    })
    .then(res => {
      this.setState({
        value: res,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

  componentDidMount(){
    var currency = getApiAbbreviationFromCurrency(this.props.pair);
    console.log(this.getCurrency(currency));
    this.getCurrency(currency);
  }
  
  render() {
    const { pair } = this.props;
    return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-row body__top">
          <img src="https://broex.io/assetspriv/image/coins-logo/LINK.png" alt="LINK" height="48" width="48" />
          <div className="my-0 ml-3 mr-auto">
            <h3 className="card-title m-0">{pair}</h3>
            <p className="text-muted m-0 text-left">{this.state.value} USD</p>
          </div>
        </div>
        <hr/>
        <div className="d-flex flex-row body__bottom">
          <a className="btn btn-secondary">Купить</a>
        </div>
      </div> 
    </div>
    )
  }
}

