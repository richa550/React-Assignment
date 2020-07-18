import React from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";
import { createStore } from 'redux';
import ReduxEx2 from './reduxEx2'

function ReduxEx() {
  const intialState= {
    age:21
  };

  const myReducer = (state = intialState ,action) => {
    const newState = {...state};
    if(action.type === "ADD"){
      newState.age += action.val;
    }
    if(action.type === "SUB"){
      newState.age -= action.val;
    }
    return newState;
  };
  
  const store = createStore(myReducer);
  //console.log("intialState:: ",store.getState());
  store.subscribe(() => {
    console.log("Store Changed:: ",store.getState())
  });

  store.dispatch({type: 'ADD', val: 5});
  store.dispatch({type: 'SUB', val: 10});
 
  return (
    <div>
      <SectionHeading heading="Redux Example 1" />
      <h6>Example 1 of Redux output showing in console , pls see the console.</h6>
      <ReduxEx2 />
    </div>
   );
}
export default ReduxEx;