import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

/**
 * In store, pentru fiecare "particica" din state-ul aplicatiei, o sa asignam un reducer care se va ocupa exclusiv de logica pentru acea "particica".
 *
 * Obiectul de state va fi:
 * {
 * contacts: [...lista de contacte],
 * filter: "", // termenul de căutare pentru filtrarea contactelor
 * }
 */

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
