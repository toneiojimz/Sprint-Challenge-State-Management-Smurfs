import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSmurf} from '../actions/smurfAction';
import {Smurf} from './Smurf';

export const SmurfVillage =({GetSmurf, smurfs}) => {
    useEffect(() =>{
        GetSmurf();

    }, [GetSmurf]);
   
    console.log(SmurfVillage)
    return(
        <div>
            {smurfs.map(sf =>(
                <Smurf blue={sf}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(
    mapStateToProps,
    {GetSmurf}
)(SmurfVillage);