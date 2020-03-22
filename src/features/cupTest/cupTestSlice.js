import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'cupTest',
  initialState: {
    tests: [],
  },
  reducers: {
    addTest: (state, action) => {
      console.log(123, action)
      state.tests = state.tests.concat([action.payload]);
    },
  },
});

export const { addTest } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addTestAsync = test => dispatch => {
  setTimeout(() => {
    dispatch(addTest(test));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCupTests = state => state.cupTest.tests;

export default slice.reducer;
