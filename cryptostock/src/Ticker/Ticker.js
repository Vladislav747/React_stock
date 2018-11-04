
import React from 'react';
import './Ticker.css';

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

    
   
    
    //  .catch((error) {
    //     console.error(error);
    //   });
   }

/**
    *  //Функция для Работы с JSON объектами
    */
   getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {          
        return responseJson.movies[0].releaseYear;
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

  getMoviesFromApiAsync1() { 
    return fetch('https://api.coinmarketcap.com/v2/ticker/1/')
      .then((response) => response.json())
      .then((responseJson) => { 
          console.log(responseJson.data.quotes.USD.price);         
        return responseJson.data.quotes.USD.price;
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
  
    constructor (props){
        //Если вдруг используем наследование то props не потеряется
      super(props);
      console.log(props);
    //   this.getMoviesFromApiAsync();
      this.getMoviesFromApiAsync1();
      //setInterval(this.getMoviesFromApiAsync);

      
    }


render(){
    const {pair} = this.props; 
    return ( <div className="ticker">
    <p>{pair.toLowerCase()}</p>
    <p>{this.state.value} USD</p>
</div>
)}

//Элемент присоединился к Virtual Dom
componentDidMount(){
//this.fetchData();
//this.interval = setInterval(this.fetchData, 10000);
this.getMoviesFromApiAsync();
}
 //вызывается непосредственно перед рендерингом компонента
    componentWillUnmount() {
    //    clearInterval(this.interval);
    }
}

//Раньше экспортировали через функцию

// export default function Ticker({pair}){
//     return (
//         <div className="ticker">
//             <p>{pair.toLowerCase()}</p>
//             <p>12000</p>
//         </div>
//     )
// }
