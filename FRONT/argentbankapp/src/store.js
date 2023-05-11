import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
//import { persistReducer, persistStore } from 'redux-persist';
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
    },
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
// };

//const persistedReducer = persistReducer(persistConfig, userAuthSlice.reducer);

// const store = configureStore({
//   reducer: {
//     userAuth: persistedReducer,
//   },
// });

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
  },
});

//const persistor = persistStore(store);

//export { store, persistor };
export { store};
