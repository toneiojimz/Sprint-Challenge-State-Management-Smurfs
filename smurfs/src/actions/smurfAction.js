import React from 'react';
import axios from 'axios';

export const FETCH_START= 'FETCH_START';
export const FETCH_SUCCESS= 'FETCH__SUCCESS';
export const FETCH_FAILURE= 'FETCH_FAILURE';
export const NEW_SMURF= 'NEW_SMURF';
export const NEW_SMURF_SUCCESS= 'NEW_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE= 'NEW_SMURF_FAILURE';

  

   const GetSmurf = () => dispatch => {
        dispatch({ type: FETCH_START});

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SUCCESS, payload: res.data})
            })
            .catch( error =>{
                dispatch({ type: FETCH_FAILURE, payload: error.res})
            });
    };
    export default GetSmurf;

    export const newSmu= (smurf) => (dispatch) => {
        dispatch({type: NEW_SMURF });

        return(
            axios 
                .post(`http://localhost:3333/smurfs`, smurf )
                .then((res) => dispatch({type: NEW_SMURF_SUCCESS, payload: res.data}))
                .catch((err)=> dispatch({type: NEW_SMURF_FAILURE, payload: err}))

        )
    };

    