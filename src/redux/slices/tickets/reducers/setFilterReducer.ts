import { PayloadAction } from '@reduxjs/toolkit';
import { TicketsState } from '../ticketsSlice';

export const setFilterReducer = (state: TicketsState, { payload }: PayloadAction<number[]>) => {
  state.filter = payload;
  state.tickets = payload.includes(-1)
    ? [...state.allTickets]
    : state.allTickets.filter(({ stops }) => payload.includes(stops));
};
