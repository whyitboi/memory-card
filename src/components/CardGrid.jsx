import { Card } from "./Card";

export function CardGrid({ cards }) {
  return (
    <ul className="card-grid">
      {cards.map((card) => (
        <li key={card.id}>
          <Card key={card.id} name={card.name} image={card.image} />
        </li>
      ))}
    </ul>
  );
}
