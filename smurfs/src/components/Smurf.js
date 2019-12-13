import React from 'react';
import  { connect } from 'react-redux';
import { getSmurf } from '../actions/smurfAction';

const Smurf = props => {
    return (
        <div>
            <div>
                {props.isFetching}
                <p>Name: {props.name}</p>
                {/* {props.name && <p>{props.smurf.name}</p>}
                {/* {props.isFetching} */}
                {/* {props.age && <p>{props.name.age}</p>} */}
                {/* {props.isFetching} */}
                {/* {props.height && <p>{props.name.height}</p>} */} 
            </div>
        </div>
    )
}

const mapStateToProps= state => {
    return {

        name: state.name,
        isFetching: state.isFetching,
        error: state.error,

        age: state.age,
        isFetching: state.isFetching,
        error: state.error,

        height: state.height,
        isFetching: state.isFetching,
        error: state.error
        
    };
};

export default connect (
    mapStateToProps,
    {getSmurf}
)(Smurf);