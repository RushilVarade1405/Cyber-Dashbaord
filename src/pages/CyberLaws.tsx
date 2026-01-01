import { cyberLaws } from "../data/cyberLaws";

export default function CyberLaws() {
  return (
    <div className="px-10 py-10 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-8">Cyber Laws</h1>

      {cyberLaws.map((law, index) => (
        <div key={index} className="mb-14">
          {/* Region Badge */}
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold
            rounded-full bg-cyan-500/20 text-cyan-400">
            {law.region}
          </span>

          {/* Title */}
          <h2 className="text-3xl font-semibold mb-3 text-cyan-300">
            {law.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-8">
            {law.description}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {law.sections.map((section, secIndex) => (
              <div
                key={secIndex}
                className="bg-gradient-to-br from-[#0b1224] to-[#0f1a33]
                border border-cyan-500/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {section.heading}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
