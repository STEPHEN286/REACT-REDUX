import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementByAmount(state, action) {
      state.counter += action.payload;
    },
    Toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "TOGGLE":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterSliceActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
