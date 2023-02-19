export const Ship = (type, size) => {
  let health = new Array(size).fill(1);
  return { type, size, health };
};
