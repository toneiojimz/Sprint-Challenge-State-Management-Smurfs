import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display:flex;
    flex-direction: column;
    margin: 4px;
    padding: 7px;
    border: 3px dotted skyblue;
    background: skyblue;
  
    
`;

const Text= styled.p`
    font-size: .8rem;
    margin-bottom: -3px;
`;


export const Smurf = (sf) => {
  
    return(
        
            <Card>
                <Text>Name: {sf.name} Smurf</Text>
                <Text>Age: {sf.age} years</Text>
                <Text>Height: {sf.height} cm</Text>
            </Card>
      
    )
};



