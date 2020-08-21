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

 