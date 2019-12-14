import React from 'react';
import axios from 'axios';

export const START_FETCH= 'FETCH_START';
export const FETCH_SUCCESS= 'FETCH__SUCCESS';
export const FETCH_FAILURE= 'FETCH_FAILURE';
export const NEW_SMURF= 'NEW_SMURF';
export const NEW_SMURF_SUCCESS= 'NEW_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE= 'NEW_SMURF_FAILURE';

  

  export const GetSmurf = () => dispatch => {

        dispatch({ type: START_FETCH});

            axios
            .get('http://localhost:3333/smurfs')
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))   
            .catch( err => dispatch({ type: FETCH_FAILURE, payload: err.res}))
            
        };
  
   

    export const newSmu= (smurf) => (dispatch) => {
        dispatch({ type: NEW_SMURF });

        
            axios 
                .post(`http://localhost:3333/smurfs`, smurf )
                .then((res) => dispatch({type: NEW_SMURF_SUCCESS, payload: res.data }))
                .catch((err)=> dispatch({type: NEW_SMURF_FAILURE, payload: err }))
           
        
    };