import { configureStore, createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: {
        firstName: 'Jean Michel',
        lastName: 'Testage',
        token: 'azeoiuyaoiuy',
    },
      reducers: {
        logUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.token = '';
        },
        editUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});


const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
    },
});

export default store;
