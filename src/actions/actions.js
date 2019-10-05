import { GET_DATA_CURRENCIES, FETCH_DATA, FETCH_ERROR } from './action-types';

import { configs } from '../dbConfig/config';

export function getDataCurrencies(json) {
    return {
        type: GET_DATA_CURRENCIES,
        payload: json
    }
}


export function fetchData(){
    return{
        type:FETCH_DATA
    }
}

export function getDataError(err){
    return {
        type: FETCH_ERROR
    }
}

export function fetchDataCurrencies() {
       
    return dispatch => {
        dispatch(fetchData())
        return fetch(configs.URI)
          .then(response => response.json())
          .then(json => dispatch(getDataIngredient(json)))
          .catch(err=> dispatch(getDataError(err)))
    }
}


