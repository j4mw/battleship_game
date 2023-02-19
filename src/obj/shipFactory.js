export const Ship = (type, size) => {
  const isHit = () => {
    console.log(`${type} has been hit!`);
  };
  const isSunk = () => {
    console.log(`${type} has been sunk!`);
  };
  return { type, size, isHit, isSunk };
};
