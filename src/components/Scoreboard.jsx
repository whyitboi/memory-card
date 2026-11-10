export function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard" aria-live="polite">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}
