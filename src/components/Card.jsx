export function Card({ name, image }) {
  return (
    <button type="button">
      <img alt={name} src={image} />
      <span>{name}</span>
    </button>
  );
}
