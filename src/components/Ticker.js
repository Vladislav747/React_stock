
import React from 'react';
import '../css/Ticker.css';
import $ from 'jquery';
export default class Ticker extends React.Component {

  state = {
    value: 0,
  };

  /**
   *  //Функция для Работы с JSON массивами
   */
  fetchData = () => {
    return fetch('https://s2.coinmarketcap.com/generated/search/quick_search_exchanges.json')
      .then(response => response.json())
      .then((response) => {
        var res1 = response;
        console.log(res1[0].name);
      })
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
        this.setState({
          value: responseJson.last,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getCurrenciesFromApiAsync(currency) {
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

  getApiAbbreviationFromCurrency(curr) {

    switch (curr) {

      case "Bitcoin Cash":
        return "BCH";

      case "Litecoin":
        return "LTC";

      case "Ethereum":
        return "ETH";

      case "Bitcoin":
        return "BTC";

      case "Stellar":
        return "XLM";

      case "XRP":
        return "XRP";

      default:
        break;
    }
  }

  constructor(props) {
    //Если вдруг используем наследование то props не потеряетс
    super(props);
    console.log(props);

    var currency = this.getApiAbbreviationFromCurrency(props.pair);
    this.getCurrenciesFromApiAsync(currency);
  }
  render() {
    const { pair } = this.props;
    return (<div className="ticker">
      <p>{pair.toLowerCase()}</p>
      <p>{this.state.value} USD</p>
    </div>
    )
  }
}

