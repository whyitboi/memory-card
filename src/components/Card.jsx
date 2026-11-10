export function Card({ name, image, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <img alt={name} src={image} />
      <span>{name}</span>
    </button>
  );
}
