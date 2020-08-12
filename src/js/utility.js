// /**
//    *  //Функция для Работы с JSON массивами
//   */
//  export const fetchData = () => {
//     return fetch('https://s2.coinmarketcap.com/generated/search/quick_search_exchanges.json')
//       .then(response => response.json())
//       .then((response) => {
//         var res1 = response;
//         console.log(res1[0].name);
//       })
//       .then((responseJson) => {
//         console.log(responseJson);
//         return responseJson.last;
       
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

  

  /**
   *  //Расшифровка абревиатуры для API
  */
  export const getApiAbbreviationFromCurrency = function (curr) {

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

 