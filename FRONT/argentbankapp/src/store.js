import { configureStore, createSlice } from '@reduxjs/toolkit';

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: {
        firstName: ' ',
        lastName: '',
        token: '',
    },
      reducers: {
        logUser: (state, action) => {
            //console.log(action);
            state.token = action.payload; 
        },
        loadProfile: (state, action) => {
            console.log(action)
            state.firstName = action.payload?.firstName;
            state.lastName = action.payload?.lastName;
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
