import { linuxCommands } from "../data/linux";

export default function Linux() {
  // Group commands by category
  const groupedCommands = linuxCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, typeof linuxCommands>);

  return (
    <div className="px-10 py-10 max-w-7xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4">Linux Commands</h1>

      <p className="text-cyan-300 mb-10">
        Common Linux commands used in cybersecurity, system administration,
        and daily operations.
      </p>

      {Object.entries(groupedCommands).map(([category, commands]) => (
        <div key={category} className="mb-14">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            {category}
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {commands.map((cmd, index) => {
              const example = cmd.example ?? "";

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
                  border border-cyan-500/30 rounded-xl p-6
                  transition-all duration-300 hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                >
                  <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                    ›› {cmd.command}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {cmd.description}
                  </p>

                  {example && (
                    <div className="flex items-center justify-between bg-[#020617]
                    rounded-lg px-3 py-2 border border-cyan-500/30">
                      <code className="text-cyan-300 text-sm overflow-x-auto">
                        {example}
                      </code>

                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(example)
                        }
                        className="ml-3 text-sm px-3 py-1 rounded-md
                        border border-cyan-400 text-cyan-400
                        hover:bg-cyan-400 hover:text-black transition"
                      >
                        Copy
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
