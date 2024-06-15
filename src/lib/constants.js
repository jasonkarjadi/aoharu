const days31 = [1, 3, 5, 7, 8, 10, 12];
export const mmdds = Array(12)
  .fill()
  .map((_, idx) => [++idx, idx === 2 ? 28 : 30 + days31.includes(idx)]);
export const leapmmdds = mmdds.with(1, [2, 29]);

// find shorter way to write using new Date() from 01/01 to 12/31 for year
