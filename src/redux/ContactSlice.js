import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { createAction } from '@reduxjs/toolkit';


export const checkContactExistence = createAction('contacts/checkExistence');

const contactData = 
  [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
;

const INITIAL_STATE = {
  contacts: contactData,
  filter:'',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];

    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
export const { checkExistence } = contactSlice.actions;
