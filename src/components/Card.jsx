export function Card({ name, image }) {
  return (
    <button>
      <img alt={name} src={image} />
      {name}
    </button>
  );
}
