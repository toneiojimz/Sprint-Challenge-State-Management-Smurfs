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

const Img = styled.img`
    backgroung-image: url(../images/smurf.png);
`;

const H1 =styled.h1`
    font-size: 7rem;
    color: skyblue;
`;



export const SmurfVillage =({GetSmurf, smurfs, isFetching}) => {
    useEffect(() =>{
        GetSmurf();

    }, [GetSmurf]);
    if(isFetching){
        // return <a> src= {smurf} alt="Smurf Image"</a>
        return <H1> ....Getting Smurfed....</H1>
    }
   
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