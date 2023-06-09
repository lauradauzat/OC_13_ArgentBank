/**
 * @fileoverview store.js is the redux store for the app
 * @version 1.0.0
 * @since 1.0.0
 * @module store.js
 * @see https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 * @requires reduxjs/toolkit
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = JSON.parse( localStorage.getItem('initialState') || '{"firstName":"","lastName":"","token":""}');

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    logUser: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('initialState', JSON.stringify(state));  
    },
    setUser: (state, action) => {
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
      localStorage.setItem('initialState', JSON.stringify(state));
    },
    clearUser: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.token = '';
      localStorage.setItem('initialState', JSON.stringify(state));
    },
  },
});



const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
  },
});


export { store};
