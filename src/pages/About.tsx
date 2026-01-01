export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050b1f] to-black text-white px-8 py-24 flex flex-col">
      <div className="max-w-5xl mx-auto flex-grow">

        <h1 className="text-4xl font-bold mb-6">
          About Cyber World
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          Cyber World is a learning-focused platform designed to help students,
          beginners, and cybersecurity enthusiasts explore core concepts of
          Linux, cybersecurity tools, cryptography, blockchain, and real-world
          platforms through a clean and interactive interface.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          <div className="p-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-[#0b1224] to-[#0f1a33]">
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              🎯 Purpose
            </h3>
            <p className="text-gray-300">
              To simplify cybersecurity learning with structured content,
              practical examples, and modern UI.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-[#0b1224] to-[#0f1a33]">
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              🚀 What You Learn
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Linux commands & system usage</li>
              <li>Cybersecurity tools</li>
              <li>Cyber laws & compliance</li>
              <li>Blockchain basics</li>
              <li>Cryptography concepts</li>
              <li>Practice platforms</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer (Only for About Page) */}
      <footer className="mt-16 text-center text-sm text-gray-400 border-t border-cyan-400/20 pt-6">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">RYTNIX</span> &amp;{" "}
        <span className="text-cyan-400 font-semibold">CRUSVEDER</span>. All rights reserved.
      </footer>
    </div>
  );
}
