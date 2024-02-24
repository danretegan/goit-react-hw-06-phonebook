import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-0', name: 'Dan Retegan', number: '+40 753 023 616' },
  { id: 'id-1', name: 'Rosie Simpson', number: '459-123-563' },
  { id: 'id-2', name: 'Hermione Kant', number: '443 (895) 123' },
  { id: 'id-3', name: 'Eden Clements', number: '645-177-799' },
  {
    id: 'id-4',
    name: "Charles de-Batz de Castelmore d'Artagnan",
    number: '+01 227-911-266',
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
