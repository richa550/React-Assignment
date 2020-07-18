import React from "react";
    
  const intialState= {
    value: 200
  };
  const reducer = (state = intialState ,action) => {
    const newState = {...state};
    if(action.type === "INCREMENT"){
      newState.value++;
    }
    if(action.type === "DECREMENT"){
      newState.value--;
    }
    return newState;
  };

export default reducer;