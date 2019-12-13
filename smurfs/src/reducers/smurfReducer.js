import {
    FETCH_NAME_START,
    FETCH_AGE_START,
    FETCH_HEIGHT_START,
    FETCH_NAME_SUCCESS,
    FETCH_AGE_SUCCESS,
    FETCH_HEIGHT_SUCCESS,
    FETCH_NAME_FAILURE,
    FETCH_AGE_FAILURE,
    FETCH_HEIGHT_FAILURE

} from '../actions/smurfAction';

const initialState= {
    name:null,
    isFetching: false,
    error: '',

    age: null,
    isFetching: false,
    error: '',

    heigt: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_NAME_START:
            return {
                ...state,
                isFetching:true
            };

        case FETCH_NAME_SUCCESS: 
            return {
                ...state,
                name: action.payload,
                isFetching:true,
                error: ''
            };
        case FETCH_NAME_FAILURE:
            return{
                ...state,
                isFetching: false, 
                error: action.payload
            };

            case FETCH_AGE_START:
                    return {
                        ...state,
                        isFetching:true
            };
            case FETCH_AGE_SUCCESS: 
                return {
                ...state,
                age: action.payload,
                isFetching:true,
                error: ''
            };
            case FETCH_AGE_FAILURE:
            return{
                ...state,
                isFetching: false, 
                error: action.payload
            };
            case FETCH_HEIGHT_START:
                    return {
                        ...state,
                        isFetching:true
            };
            case FETCH_HEIGHT_SUCCESS: 
                return {
                        ...state,
                        age: action.payload,
                        isFetching:true,
                        error: ''
            };
            case FETCH_HEIGHT_FAILURE:
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