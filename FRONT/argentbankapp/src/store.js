import { configureStore, createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    firstName: '',
    lastName: '',
    token: '',
  },
  reducers: {
    logUser: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
    },
    clearUser: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.token = '';
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userAuthSlice.reducer);

const store = configureStore({
  reducer: {
    userAuth: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
