import * as actionType from '../constants/cityConstants';


export const getCitiesReducer = (state = { cities: [] }, action) => {
    switch(action.type){
        case actionType.GET_CITIES_SUCCESS:
            return{ cities: action.payload}
        case actionType.GET_CITIES_FAIL:
            return { error: action.payload}
        default:
            return state
    }
}

export const getCityDetailsReducer = (state = {city:{}}, action) => {
    switch(action.type){
        case actionType.GET_CITY_DETAILS_REQUEST:
            return {loading: true}
        case actionType.GET_CITY_DETAILS_SUCCESS:
            return{loading: false, city: action.payload}
        case actionType.GET_CITY_DETAILS_FAIL:
            return{loading: false, error: action.payload}
        case actionType.GET_CITY_DETAILS_RESET:
            return{city: {}}
        default:
            return state
    }
}