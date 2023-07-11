import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: [],
  searchValue: '',
  filteredUser: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        user: action.payload,
        searchValue: '',
        filteredUser: action.payload,
      }; // Set the state to the fetched data
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
        filteredUser: state.user.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case 'RESET':
      return { ...state, searchValue: '', filteredUser: state.user };
    default:
      return state;
  }
};

// Create the store context
export const StoreContext = createContext();

// Store provider component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
