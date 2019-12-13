import React from 'react';

const Smurf = (props) => {
    return(
        <div>
            <p>Name: {props.name && props.isFetching}</p>
            <p>Age: {props.age && props.isFetching}</p>
            <p>Height: {props.height && props.isFetching}</p>
        </div>
    )
};

export default Smurf;