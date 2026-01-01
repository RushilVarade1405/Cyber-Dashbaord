export interface Platform {
  name: string;
  description: string;
}

export const platforms: Platform[] = [
  {
    name: "TryHackMe",
    description: "Beginner-friendly cybersecurity labs"
  },
  {
    name: "Hack The Box",
    description: "Advanced penetration testing challenges"
  }
];
