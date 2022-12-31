import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'setInput',
  initialState: {
    input: '',
  },
  reducers: {
    getInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { getInput } = searchSlice.actions;
export default searchSlice.reducer;
