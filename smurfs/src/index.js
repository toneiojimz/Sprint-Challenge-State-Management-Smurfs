import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/smurfReducer';

import NewSmurf from './components/NewSmurf'
import SmurfVillage from './components/SmurfVillage'
import styled from 'styled-components';


const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px:
  flex-wrap: wrap;
`;

const H1 = styled.h1`
  font-size: 3rem;
  text-decoration: skyblue underline overline wavy;
`;



const store = createStore(reducer, applyMiddleware(thunk))

function App (){
    
      return (
        <Page className="App">
          <H1>SMURF VILLAGE</H1>
              <NewSmurf/>
             
              <SmurfVillage/>
               
        </Page>
      );
    
}


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);