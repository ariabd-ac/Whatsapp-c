// setup data layer

import React, { createContext, useContext, useReducer } from "react";

// this is data layer
export const StateContext = createContext();

// build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// import React, { createContext, useContext, useReducer } from "react";
// export const StateContext = createContext();
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);
