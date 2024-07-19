import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReduser from './contactsSlice'
import filterReduser from './filtersSlice'


const contactsPersistedReducer = persistReducer({
  key: 'contacts',
  storage,
}, contactsReduser);
const filtersPersistedReducer = persistReducer({
  key: "filters",
  storage,
} , filterReduser)

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filtersPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);