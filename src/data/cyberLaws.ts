export interface CyberLawSection {
  region: "India" | "Global";
  title: string;
  description: string;
  sections: {
    heading: string;
    points: string[];
  }[];
}

export const cyberLaws: CyberLawSection[] = [
  // ===============================
  // CYBER LAWS IN INDIA
  // ===============================
  {
    region: "India",
    title: "Cyber Laws in India",
    description:
      "Cyber laws in India regulate digital activities, cybercrime, data protection, and electronic transactions.",
    sections: [
      {
        heading: "Information Technology Act, 2000",
        points: [
          "Primary cyber law legislation in India",
          "Provides legal recognition to electronic records and digital signatures",
          "Facilitates e-governance and e-commerce",
          "Defines and penalizes cyber offences",
        ],
      },
      {
        heading: "Important Cyber Crime Sections",
        points: [
          "Section 43 – Unauthorized access and data damage",
          "Section 65 – Tampering with computer source code",
          "Section 66 – Computer-related offences",
          "Section 66C – Identity theft",
          "Section 66D – Online cheating and fraud",
          "Section 66E – Violation of privacy",
          "Section 66F – Cyber terrorism",
        ],
      },
      {
        heading: "Obscene & Harmful Content Laws",
        points: [
          "Section 67 – Publishing obscene content",
          "Section 67A – Sexually explicit content",
          "Section 67B – Child sexual abuse material",
        ],
      },
      {
        heading: "Government Powers & Security",
        points: [
          "Section 69 – Interception and monitoring of data",
          "Section 70 – Protected systems",
          "Section 72 – Breach of confidentiality and privacy",
        ],
      },
      {
        heading: "IT (Amendment) Act, 2008",
        points: [
          "Introduced identity theft and cyber terrorism offences",
          "Strengthened penalties",
          "Enhanced data security provisions",
        ],
      },
      {
        heading: "Digital Personal Data Protection Act, 2023",
        points: [
          "Regulates collection and processing of personal data",
          "Consent-based data usage",
          "Rights of data principals",
          "Heavy penalties for data breaches",
        ],
      },
      {
        heading: "Other Indian Laws Related to Cybercrime",
        points: [
          "Indian Penal Code – Online fraud and defamation",
          "Companies Act – Data security obligations",
          "Copyright Act – Digital piracy",
          "Indian Evidence Act – Electronic evidence",
        ],
      },
    ],
  },

  // ===============================
  // CYBER LAWS AROUND THE WORLD
  // ===============================
  {
    region: "Global",
    title: "Cyber Laws Around the World",
    description:
      "Different countries have their own cyber laws focusing on privacy, cybersecurity, data protection, and cybercrime prevention.",
    sections: [
      {
        heading: "European Union (EU)",
        points: [
          "General Data Protection Regulation (GDPR)",
          "Strong privacy and data protection rights",
          "Applies globally if EU citizens’ data is involved",
          "Heavy penalties for violations",
        ],
      },
      {
        heading: "United States",
        points: [
          "Computer Fraud and Abuse Act (CFAA)",
          "California Consumer Privacy Act (CCPA)",
          "Focus on unauthorized access and consumer data rights",
        ],
      },
      {
        heading: "United Kingdom",
        points: [
          "Data Protection Act, 2018",
          "UK implementation of GDPR principles",
          "Regulates personal data handling",
        ],
      },
      {
        heading: "China",
        points: [
          "Cybersecurity Law of China",
          "Strict data localization rules",
          "Strong government control over data",
          "National security-focused approach",
        ],
      },
      {
        heading: "Australia",
        points: [
          "Privacy Act, 1988",
          "Protects personal information",
          "Mandatory data breach notification",
        ],
      },
      {
        heading: "International Cyber Law",
        points: [
          "Budapest Convention on Cybercrime",
          "International cooperation against cybercrime",
          "Cross-border evidence sharing",
        ],
      },
      {
        heading: "India vs Global Comparison",
        points: [
          "India focuses on cybercrime and national security",
          "Global laws emphasize privacy and user rights",
          "GDPR penalties are higher than Indian laws",
          "International cooperation is stronger globally",
        ],
      },
    ],
  },
];
