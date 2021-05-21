export const deepCopy = (value: unknown): unknown =>
  JSON.parse(JSON.stringify(value));
