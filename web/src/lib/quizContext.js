import React, { useReducer, createContext, useEffect } from 'react';

const initialState = {
  completingForMyself: true,
  contactBy: 'contactByEmail',
  subscribe: false,
  prevProgress: '0%',
};

export const QuizContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadState':
      return action.payload;
    case 'updateQuizDetails':
      return {
        ...state,
        ...action.payload,
      };
    case 'updatePrevProgress':
      return {
        ...state,
        prevProgress: action.payload,
      };
    // reset the state to the initialState
    case 'resetState':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const QuizStateProvider = ({ children }) => {
  const [quizState, dispatch] = useReducer(reducer, initialState);

  // load state from localstorage on first render
  useEffect(() => {
    const localState = localStorage.getItem('quizState');
    if (localState) {
      dispatch({ type: 'loadState', payload: JSON.parse(localState) });
    }
  }, []);

  // update browser localstorage as state changes
  useEffect(() => {
    localStorage.setItem('quizState', JSON.stringify(quizState));
  }, [quizState]);

  return (
    <QuizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  const context = React.useContext(QuizContext);
  if (context === undefined) {
    throw new Error(`useSiteContext must be used within a SiteProvider`);
  }
  return context;
};

export { QuizStateProvider, useQuizContext };
