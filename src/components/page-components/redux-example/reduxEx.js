import React from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";
import { createStore } from 'redux';
import ReduxEx2 from './reduxEx2'

function ReduxEx() {
  const intialState= {
    age:20
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
    <div className="mt-40">
      <ReduxEx2 />
      <SectionHeading heading="Redux Example 2" />
      <h5>Set Default Age : 20 Then Called Dispatched 2 action:: 1 for adding age by 5 and another action subtracting age by 10</h5>
      <h5 className="mb-15"> Output is: 25 and 15 Redux output showing in console , pls see the console</h5>
    

   
    </div>
   );
}
export default ReduxEx;