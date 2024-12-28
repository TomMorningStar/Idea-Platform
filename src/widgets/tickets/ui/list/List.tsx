import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { fetchTickets } from '../../../../redux/slices/tickets/extra-reducers/fetchTickets';
import {
  selectError,
  selectLoading,
  selectTickets,
} from '../../../../redux/slices/tickets/ticketsSlice';
import { ListItem } from '../list-item/ListItem';

import s from './List.module.scss';

interface Props {
  className?: string;
}

export const List: React.FC<Props> = ({ className }) => {
  const tickets = useAppSelector(selectTickets);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className={`${className} ${s.list}`}>
      {tickets.map((ticket, index) => (
        <ListItem key={index} ticket={ticket} />
      ))}
    </ul>
  );
};
