import { Card } from "./Card";

export function CardGrid({ cards }) {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} name={card.name} image={card.image} />
      ))}
    </>
  );
}
