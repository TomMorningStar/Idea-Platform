import { Filters } from './widgets/filters';
import { List } from './widgets/tickets';

export const App = () => {
  return (
    <main className="main">
      <Filters />
      <List />
    </main>
  );
};
