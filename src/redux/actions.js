import { GET_DATA_CURRENCIES, FETCH_DATA, FETCH_ERROR } from './action-types';
import { getRecipes } from '../services/mLab';
import { configs } from '../dbConfig/config';

export function changeIsFormOpen(payload) {

    return { type: CHANGE_FORM_OPEN, payload }
}
export function addDataIngredient(payload) {

    return { type: ADD_DATA_INGREDIENT, payload }
}

export function getDataIngredient(json) {
    return {
        type: GET_DATA_INGREDIENT,
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

export function fetchDataIngredient() {
       
    return dispatch => {
        dispatch(fetchData())
        return fetch(configs.URI)
          .then(response => response.json())
          .then(json => dispatch(getDataIngredient(json)))
          .catch(err=> dispatch(getDataError(err)))
    }
}


