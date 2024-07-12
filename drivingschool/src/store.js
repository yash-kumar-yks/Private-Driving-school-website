import { createStore, combineReducers } from 'redux';

// Initial state
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  dataJson: []
};

// Action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

// Action creators
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const logout = () => ({ type: LOGOUT });
export const addNewBlog = (newBlogData) => ({
    type: 'ADD_NEW_BLOG',
    payload: newBlogData,
  });
  export const setDataJson = (jsonData) => ({
    type: 'SET_DATA_JSON',
    payload: jsonData,
  });
// Reducer
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    
    case 'SET_DATA_JSON':
      return {
        ...state,
        dataJson: action.payload
      };
      case 'ADD_NEW_BLOG':
      return {
        ...state,
        dataJson: [...state.dataJson, action.payload],
      };
      
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
