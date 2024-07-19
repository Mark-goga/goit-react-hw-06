import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact (state, action)  {
      state.items.push(action.payload)
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;