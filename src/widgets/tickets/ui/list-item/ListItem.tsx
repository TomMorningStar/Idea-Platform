import React from 'react';

import { Ticket } from '../../../../redux/slices/tickets/ticketsSlice';

import s from './ListItem.module.scss';

interface Props {
  className?: string;
  ticket: Ticket;
}

export const ListItem: React.FC<Props> = ({ className, ticket }) => {
  return (
    <li className={`${className} ${s.item}`}>
      <div className={s.info}>
        <div>
          <div className={s.time}>{ticket.departure_time}</div>
          <div className={s.name}>
            {ticket.origin}, {ticket.origin_name}
          </div>
          <div>{ticket.departure_date}</div>
        </div>
        <p className={s.stops}>
          {ticket.stops}{' '}
          {ticket.stops === 1 ? 'пересадка' : ticket.stops === 0 ? 'пересадок' : 'пересадки'}
        </p>
        <div>
          <div className={s.time}>{ticket.arrival_time}</div>
          <div className={s.name}>
            {ticket.destination_name}, {ticket.destination}
          </div>
          <div>{ticket.arrival_date}</div>
        </div>
      </div>

      <button
        className={s.button}
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert(
            `Куплен билет за ${ticket.price} руб. Номер билета: ${ticket.id}. Время посадки ${ticket.arrival_time}. Время вылета ${ticket.departure_time}. Дата вылета ${ticket.departure_date}. Дата прилета ${ticket.arrival_date}.`
          );
        }}
      >
        {ticket.price} руб.
      </button>
    </li>
  );
};
