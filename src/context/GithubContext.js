import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const githubURL = process.env.REACT_APP_GITHUB_URL;
const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get User
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${githubURL}/search/users?q=${login}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const { items } = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: items,
      });
    }
  };

  // loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
