import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { fetchTicketsBuilder } from './extra-reducers/fetchTickets';
import { setFilterReducer } from './reducers/setFilterReducer';

export interface Ticket {
  id?: string;
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export interface TicketsState {
  tickets: Ticket[];
  allTickets: Ticket[];
  loading: boolean;
  error: string | null;
  filter: number[];
}

const initialState: TicketsState = {
  tickets: [],
  allTickets: [],
  loading: false,
  error: null,
  filter: [],
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setFilter: setFilterReducer,
  },
  extraReducers: (builder) => fetchTicketsBuilder(builder),
});

export const selectTickets = (state: RootState) => state.tickets.tickets;
export const selectLoading = (state: RootState) => state.tickets.loading;
export const selectError = (state: RootState) => state.tickets.error;

export const { setFilter } = ticketsSlice.actions;
export default ticketsSlice.reducer;
