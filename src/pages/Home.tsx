export default function Home() {
  return (
    <div className="px-10 py-16 max-w-7xl mx-auto text-white">

      {/* ===============================
          HERO SECTION
      =============================== */}
      <div className="mb-14">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Welcome to <span className="text-cyan-400">Cyber World</span>
        </h1>

        <p className="text-gray-300 max-w-2xl leading-relaxed">
          A focused learning hub for cybersecurity, Linux, blockchain,
          cryptography, and real-world platforms — built for learners who
          want clarity, not noise.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/linux"
            className="px-5 py-2 rounded-lg border border-cyan-400
            text-cyan-400 hover:bg-cyan-400 hover:text-black
            transition font-medium"
          >
            Start Learning →
          </a>

          <a
            href="/about"
            className="px-5 py-2 rounded-lg border border-cyan-500/30
            text-gray-300 hover:border-cyan-400 transition"
          >
            About Project
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-14" />

      {/* ===============================
          LEARNING SECTIONS
      =============================== */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {/* Linux */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            🐧 Linux
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Essential Linux commands, file systems, permissions, and
            system operations used by professionals.
          </p>
        </div>

        {/* Cyber Tools */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            🛠️ Cyber Tools
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Hands-on tools like Nmap, Burp Suite, Metasploit, Wireshark,
            and more — explained clearly.
          </p>
        </div>

        {/* Cyber Laws */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            ⚖️ Cyber Laws
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            IT Act, cyber crimes, digital evidence, compliance,
            and global cyber regulations.
          </p>
        </div>

        {/* Blockchain */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            ⛓️ Blockchain
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Distributed ledgers, smart contracts, consensus,
            and real blockchain platforms.
          </p>
        </div>

        {/* Cryptography */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            🔐 Cryptography
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Encryption, hashing, AES, RSA, digital signatures,
            and modern cryptographic security.
          </p>
        </div>

        {/* Platforms */}
        <div className="group bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
          border border-cyan-500/20 rounded-2xl p-6
          transition hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-2">
            🌐 Platforms
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Practice environments like TryHackMe, Hack The Box,
            blockchain labs, and learning platforms.
          </p>
        </div>

      </div>

      {/* ===============================
          FOOTER NOTE
      =============================== */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        In the digital world, security is not an option — it is responsibility.
      </div>
    </div>
  );
}
