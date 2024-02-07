import axios from 'axios';
import * as actionTypes from '../constants/cityConstants';

const URL = 'http://localhost:8000';

export const getCities = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/cities`);
    dispatch({ type: actionTypes.GET_CITIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CITIES_FAIL, payload: error.message });
  }
};

export const getCityDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CITY_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/city/${id}`);

    dispatch({ type: actionTypes.GET_CITY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CITY_DETAILS_FAIL, payload: error.message });
  }
};
