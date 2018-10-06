
import React from 'react';
import './Ticker.css';

export default class Ticker extends React.Component {

   state = {
       value: 0,
   };
   //http://coins.demo.javascript.ninja/ticker/${props.pair}
   fetchData = () => {
    return fetch(`https://s2.coinmarketcap.com/generated/search/quick_search_exchanges.json`)
     //TODO: Правильно разпарсить json
    .then(r => r.json())
     .then(res => {
       this.setState({
        value: res.last,
       });
     });
   }
    constructor (props){
        //Если вдруг используем наследование то props не потеряется
      super(props);
      console.log(props);
      this.fetchData();
      setInterval(this.fetchData, 1000);

      
    }


    //вызывается непосредственно перед рендерингом компонента
    componentWillMount(){

    }

render(){
    const {pair} = this.props; 
    return ( <div className="ticker">
    <p>{pair.toLowerCase()}</p>
    <p>{this.state.value}</p>
</div>
)}

//Элемент присоединился к Virtual Dom
componentDidMount(){

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