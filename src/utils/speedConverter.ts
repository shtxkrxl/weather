export const kphToMps = (kph: number): number => {
  const mps = Math.floor(kph * (1000 / 3600) * 100) / 100;
  return mps;
};
