import { Card } from '../card/card';

type Props = {
  children;
};

export function List({ children }: Props) {
  return (
    <div className="app-container">
      <ul className="characters-list row list-unstyled">
        {children.map((character) => (
          <Card character={character}></Card>
        ))}
      </ul>
    </div>
  );
}
