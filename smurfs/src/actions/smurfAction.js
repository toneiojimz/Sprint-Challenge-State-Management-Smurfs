import axios from 'axios';

    export const FETCH_NAME_START= 'FETCH_NAME_START';
    export const FETCH_AGE_START= 'FETCH_AGE_START';
    export const FETCH_HEIGHT_START= 'FETCH_HEIGHT_START';


    export const FETCH_NAME_SUCCESS= 'FETCH_NAME_SUCCESS';
    export const FETCH_AGE_SUCCESS= 'FETCH_AGE_SUCCESS';
    export const FETCH_AGE_FAILURE= 'FETCH_AGE_FAILURE';

    export const FETCH_NAME_FAILURE= 'FETCH_NAME_FAILURE';
    export const FETCH_HEIGHT_SUCCESS= 'FETCH_HEIGHT_SUCCESS';
    export const FETCH_HEIGHT_FAILURE= 'FETCH_HEIGHT_FAILURE';

    export const getSmurf= () => dispatch => {
        dispatch({ type: FETCH_NAME_START, FETCH_AGE_START, FETCH_HEIGHT_START});

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_NAME_SUCCESS, FETCH_AGE_SUCCESS, FETCH_HEIGHT_SUCCESS, payload: res.data})
            })
            .catch( err =>{
                dispatch({ type: FETCH_NAME_FAILURE, FETCH_AGE_FAILURE, FETCH_HEIGHT_FAILURE, payload: err.res})
            });
    };