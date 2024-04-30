// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, MembersState and MembersActions 
// from the reducer.ts file

import { reducer, initialState, MembersState, MembersActions } from "./reducer";


export const useMembersState = () => useContext(MembersStateContext);

// This line defines a custom hook `useMembersState`, that uses the `useContext` 
// hook to access the value stored in the `MembersStateContext`.
// The `MembersStateContext` is created using the createContext function 
// and is used to store the current `state` of the Members. 
// By using the `useMembersState` hook in a component, 
// you can retrieve the current `state` of the Members without directly accessing 
// the context or passing down the state as a prop. This simplifies the code 
// and ensures that the state is always up to date.

export const useMembersDispatch = () => useContext(MembersDispatchContext);

const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);
const MembersStateContext = createContext<MembersState | undefined>(undefined);
type MembersDispatch = React.Dispatch<MembersActions>;
// Next, using createContext function, we will create a context for
// `Members State` object. The shape of this new context object is 
// MembersState and here I've set the default value to undefined.

// Next, I'll define our MembersProvider component, and make this 
// MembersStateContext available using context Provider.


export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    // Here, I'll use the useReducer hook to manage state. I've passed the `reducer`  
    // function and the `initialState` that I've defined in the reducer.ts file.
    const [state, dispatch] = useReducer(reducer, initialState);
    // Then, I'll pass the `state` object as value of this MembersStateContext

    return (
        <MembersStateContext.Provider value={state}>
            <MembersDispatchContext.Provider value={dispatch}>
                {children}
            </MembersDispatchContext.Provider>
        </MembersStateContext.Provider>
    );
};