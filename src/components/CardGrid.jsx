import { Card } from "./Card";

export function CardGrid({ cards, onCardClick }) {
  return (
    <ul className="card-grid">
      {cards.map((card) => (
        <li key={card.id}>
          <Card
            name={card.name}
            image={card.image}
            onClick={() => onCardClick(card.id)}
          />
        </li>
      ))}
    </ul>
  );
}
