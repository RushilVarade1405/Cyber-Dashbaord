import { Link } from "react-router-dom";

const cards = [
  { title: "Linux", icon: "🐧", desc: "Essential Linux commands and system operations", link: "/linux" },
  { title: "Cyber Tools", icon: "🛠️", desc: "Security tools like Nmap, Burp Suite, Metasploit", link: "/tools" },
  { title: "Cyber Laws", icon: "⚖️", desc: "IT Act, cyber crimes and compliance rules", link: "/cyber-laws" },
  { title: "Blockchain", icon: "⛓️", desc: "Distributed ledger and smart contracts", link: "/blockchain" },
  { title: "Cryptography", icon: "🔐", desc: "Encryption, hashing and secure algorithms", link: "/cryptography" },
  { title: "Platforms", icon: "🌐", desc: "TryHackMe, Hack The Box & labs", link: "/platforms" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <h1 className="text-4xl font-bold mb-10">Welcome to Cyber World</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c.title}
            to={c.link}
            className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
              border border-cyan-500/30 rounded-xl p-6
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            <div className="text-3xl mb-3">{c.icon}</div>

            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              {c.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {c.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
