
import {GET_DATA_INGREDIENT, FETCH_DATA, FETCH_ERROR } from '../actions/action-types';
import { combineReducers } from 'redux';


//Изначальный state
export const initialState = {

    currenciesList: ["Bitcoin","Ethereum","Litecoin","Bitcoin Cash","Stellar","XRP"],
    selectedPairs: [],
    value: 0
    
};

//Если есть state то используем его иначе - изначальный state
function reducer (state = initialState, action) {

    switch (action.type) {

        case FETCH_DATA:
            return {...state, isLoading: true}

        case FETCH_ERROR:
            return {...state, isError:true}

        case GET_DATA_INGREDIENT:
        
            return Object.assign({}, state, {
                isLoading:false,
                dataIngredient: action.payload
            });

        default:
            return state;
    }
   
}

export default reducer;




