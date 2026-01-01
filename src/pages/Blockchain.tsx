import { blockchainTopics } from "../data/blockchain";

export default function Blockchain() {
  return (
    <div>
      <h1>Blockchain</h1>

      {blockchainTopics.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
