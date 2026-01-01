import { platforms } from "../data/platforms";

export default function Platforms() {
  return (
    <div>
      <h1>Learning Platforms</h1>

      {platforms.map((p, index) => (
        <div key={index}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
