import { configureStore } from '@reduxjs/toolkit';
import fetchTicketsReducer from '../slices/tickets/ticketsSlice';

export const store = configureStore({
  reducer: {
    tickets: fetchTicketsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
