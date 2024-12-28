import React from 'react';
import { useAppDispatch } from '../../../../redux/hooks';

import { setFilter } from '../../../../redux/slices/tickets/ticketsSlice';
import s from './Filters.module.scss';

interface Props {
  className?: string;
}

const filterOptions = [
  { label: 'Все', value: -1 },
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 },
];

export const Filters: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [selectedFilters, setSelectedFilters] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (selectedFilters.length > 0) {
      dispatch(setFilter(selectedFilters));
    } else {
      dispatch(setFilter([-1]));
    }
  }, [selectedFilters, dispatch]);

  const handleCheckboxChange = (value: number) => {
    setSelectedFilters((prev) => {
      if (value === -1) {
        return [-1];
      }
      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev.filter((v) => v !== -1), value];
    });
  };

  return (
    <div className={className}>
      <div className={s.wrapper}>
        <h3 className={s.title}>Количество пересадок</h3>
        {filterOptions.map(({ label, value }) => (
          <div className={s.checkboxWrapper} key={value}>
            <input
              type="checkbox"
              id={`filter-${value}`}
              checked={selectedFilters.includes(value)}
              onChange={() => handleCheckboxChange(value)}
              className={s.checkbox}
            />
            <label className={s.label} htmlFor={`filter-${value}`}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
