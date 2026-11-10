import { Card } from "./Card";

export function Cardgrid(cards) {
  cards.map((card) => (
    <Card key={card.key} name={card.name} image={card.image} />
  ));
}
