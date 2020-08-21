import React, { Component } from 'react';
import $ from 'jquery';

import currencies from './api/cryptocurrencies';
import {Ticker, Banner} from './components';

import logo from './logo.svg';
import './css/App.css';
class App extends Component {

  //Ставим изначальный state
  state = {
    currencies: currencies,
  };

   /**
   *  //Анимация карусели
   * 
   * el - Элемент над которым будет происходить анимация
   * blockWidth - ширина одного элемента в каруселе (ширина элемента + margin)
   * count - количество элементов в каруселе
   * direct - направление движение карусели
  */

 cards_animate (el, blockWidth, count, direct) {
  const
      speed = 75,
      offset = blockWidth * count,
      start = (direct) ? 0 : -offset,
      end = (direct) ? -offset : 0;
      
  let reset = function() {
      let m = parseInt($(this).css('margin-left'), 10);
      if(m === end) {
          $(el).css('margin-left', start);
          m = offset;
      }else if(direct)
          m += offset;
      $(el).animate({'margin-left': end}, Math.abs(m) / speed * 1000, 'linear', reset);
  };

  let pause = function() {
      $(el).stop();
  }
  $(el).css('margin-left', start)
      .animate({'margin-left': end}, offset / speed * 1000, 'linear', reset)
      .mouseenter(pause).mouseleave(reset);

}

  componentDidMount() {
    const galleryCards = document.getElementsByClassName('cards-container')[0];
    this.cards_animate(galleryCards, 220, 4, true);
 }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        

        <main role="main">
          <Banner
            title="Сервис для покупки, продажи и управления портфелем криптовалют для всех"
          />
          <div className="cards-container d-flex flex-nowrap w-100 position-relative">
            {this.state.currencies.map(pair =>
              <Ticker 
                key={pair} 
                pair={pair}
              />
            )}
          </div>
        
          
        </main>

      </div>
    );
  } 
}


export default App;
