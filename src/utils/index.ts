export const deepCopy = (value: any): unknown =>
  JSON.parse(JSON.stringify(value));
