export interface CryptoTopic {
  title: string;
  description: string;
}

export const cryptoTopics: CryptoTopic[] = [
  {
    title: "Symmetric Encryption",
    description: "AES, DES and shared-key encryption"
  },
  {
    title: "Asymmetric Encryption",
    description: "RSA, ECC and public/private keys"
  }
];
