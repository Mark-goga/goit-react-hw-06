import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: "contacts",
  initialState: { name: "" },
  reducers: {
    changeFilter (state, action)  {
      state.name = action.payload
    }
  }
})

export default slice.reducer;
export const { changeFilter  } = slice.actions;
export const selectNameFilter = (state) => state.filters.name;