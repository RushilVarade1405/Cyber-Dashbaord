import { cryptoTopics } from "../data/crypto";

export default function Cryptography() {
  return (
    <div>
      <h1>Cryptography</h1>

      {cryptoTopics.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
