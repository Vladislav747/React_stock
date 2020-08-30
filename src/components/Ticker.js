
import React from 'react';

import {showNoty} from '../utility';
import '../css/Ticker.css';

export default class Ticker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      showModal: false, 
      modalText: ""
    };

    //Только для function а не functional declaration
   
    this.getApiAbbreviationFromCurrency = this.getApiAbbreviationFromCurrency.bind(this); 
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    var currency = this.getApiAbbreviationFromCurrency(props.pair);
    this.fetchDataCurrencies(currency);
  }

  componentDidMount(){
    this.fetchDataCurrencies = this.fetchDataCurrencies.bind(this); 
  }

  /**
   * Получает и устанавливает данные для state "value" с сервиса coinmarketcap
   * 
   * @param  {string} currency
   */
  fetchDataCurrencies(currency) {
    return fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + currency + '&convert=USD', {
      headers: {
        'X-CMC_PRO_API_KEY': '523dd32d-0443-4acb-bad3-00dbab6f344d',
      }
    })
      .then(
          (response) => response.json()
        )
      .catch((e) => {
          showNoty('Произошла ошибка с данными обратитесь к адимнистратору');
          throw new Error("ошибка получения данных в Ticker", e);
      })
      .then((responseJson) => {
        switch (currency) {

          case "BCH":
            return Math.round(responseJson.data.BCH.quote.USD.price - 1);

          case "LTC":
            return Math.round(responseJson.data.LTC.quote.USD.price, -1);

          case "BTC":
            return Math.round(responseJson.data.BTC.quote.USD.price, -1);

          case "ETH":
            return Math.round(responseJson.data.ETH.quote.USD.price, -1);

          case "XLM":
            return Math.round(responseJson.data.XLM.quote.USD.price, -1);

          case "XRP":
            return Math.round(responseJson.data.XRP.quote.USD.price - 1);

          default:
            break;
        }
      })
      .then(res => {
        this.setState({
          value: res,
        });
      })
      .catch((e) => {
          showNoty('Произошла ошибка с данными обратитесь к адимнистратору');
          throw new Error("ошибка получения данных в Ticker", e);
      });
  }

  /**
   * Возвращает аббревиатуру криптовалюты
   * 
   * @param  {string} curr
   */
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

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
    <div className="ticker">
      <p>{this.props.pair.toLowerCase()}</p>
      <p>{this.state.value} USD</p>

    </div>
    )
  }
}

