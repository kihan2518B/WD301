// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, ProjectsState and ProjectsActions 
// from the reducer.ts file

import { reducer, initialState, MembersState, MembersActions } from "./reducer";


export const useMembersState = () => useContext(MembersStateContext);

// This line defines a custom hook `useProjectsState`, that uses the `useContext` 
// hook to access the value stored in the `ProjectsStateContext`.
// The `ProjectsStateContext` is created using the createContext function 
// and is used to store the current `state` of the projects. 
// By using the `useProjectsState` hook in a component, 
// you can retrieve the current `state` of the projects without directly accessing 
// the context or passing down the state as a prop. This simplifies the code 
// and ensures that the state is always up to date.

export const useMembersDispatch = () => useContext(MembersDispatchContext);

const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);
const MembersStateContext = createContext<MembersState | undefined>(undefined);
type MembersDispatch = React.Dispatch<MembersActions>;
// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is 
// ProjectsState and here I've set the default value to undefined.

// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.


export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    // Here, I'll use the useReducer hook to manage state. I've passed the `reducer`  
    // function and the `initialState` that I've defined in the reducer.ts file.
    const [state, dispatch] = useReducer(reducer, initialState);
    // Then, I'll pass the `state` object as value of this ProjectsStateContext

    return (
        <MembersStateContext.Provider value={state}>
            <MembersDispatchContext.Provider value={dispatch}>
                {children}
            </MembersDispatchContext.Provider>
        </MembersStateContext.Provider>
    );
};