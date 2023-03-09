export const Ship = (type, code, size) => {
  let health = size;
  let sunk = false;
  return {
    type,
    size,
    code,
    hit: () => {
      health--;
    },
    checkSunk: () => {
      if (health <= 0) {
        sunk = true;
      }
    },
    // sunk getter
    getSunk: () => {
      return sunk;
    },
    // health getter
    getHealth: () => {
      return health;
    },
  };
};
