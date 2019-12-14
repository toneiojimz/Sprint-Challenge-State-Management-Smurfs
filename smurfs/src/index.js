import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/smurfReducer';

import NewSmurf from './components/NewSmurf'
import SmurfVillage from './components/SmurfVillage'



const store = createStore(reducer, applyMiddleware(thunk))

function App (){
    
      return (
        <div className="App">
          <h1>SMURFS VILLAGE</h1>
          
              <SmurfVillage/>
              <NewSmurf/> 
        </div>
      );
    
}


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);