// Email ve domain validasyon için ortak regex tanımları
export const knownRegex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  domain: /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}\.)*[a-zA-Z]{2,}$/,
};
