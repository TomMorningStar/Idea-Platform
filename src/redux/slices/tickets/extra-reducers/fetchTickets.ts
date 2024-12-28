import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ROOT_URL } from '../../../../root/constants/api';
import { Ticket, TicketsState } from '../ticketsSlice';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const response = await fetch(`${ROOT_URL}/tickets`);
  if (!response.ok) {
    throw new Error('Failed to fetch tickets');
  }
  return (await response.json()) as Ticket[];
});

export const fetchTicketsBuilder = (builder: ActionReducerMapBuilder<TicketsState>) => {
  builder
    .addCase(fetchTickets.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchTickets.fulfilled, (state, action) => {
      state.loading = false;
      state.allTickets = action.payload.sort((a: Ticket, b: Ticket) => a.price - b.price);
      state.tickets = action.payload;
    })
    .addCase(fetchTickets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
};
