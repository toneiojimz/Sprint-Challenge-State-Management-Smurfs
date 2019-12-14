import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSmurf} from '../actions/smurfAction';
import {Smurf} from './Smurf';
import styled from 'styled-components';


const Villa = styled.div`
    display: flex;
    width: 900px;
    flex-wrap: wrap;
    margin-top: 20px;
    
  
    
    
`;



export const SmurfVillage =({GetSmurf, smurfs}) => {
    useEffect(() =>{
        GetSmurf();

    }, [GetSmurf]);
   
    console.log(SmurfVillage)
    return(
        <Villa >
            {smurfs.map(sf =>(
                <Smurf name={sf.name} age={sf.age} height={sf.height}/>
            ))}
        </Villa>
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