import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    NEW_SMURF,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_FAILURE

} from '../actions/smurfAction';

const initialState= {
    smurfs:[],
    isFetching: false,
    error: '',

  
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_START:
            return {
                ...state,
                isFetching:true,
                error: ''
            };

        case FETCH_SUCCESS: 
            return {
                ...state,
                smurfs: action.payload,
                isFetching:true,
                error: ''
            };
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false, 
                error: action.payload
            };

           
            case NEW_SMURF:
                    return {
                        ...state,
                        smurfs : [...state.smurfs, action.payload],
                        isFetching:true,
                        error: ''
            };
            case NEW_SMURF_SUCCESS: 
                return {
                        ...state,
                        smurfs: action.payload,
                        isFetching:false,
                        error: ''
            };
            case NEW_SMURF_FAILURE:
                    return{
                        ...state,
                        isFetching: false, 
                        error: action.payload
            };
            
            default:
                return state
    }
};

export default reducer;