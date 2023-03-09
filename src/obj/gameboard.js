export const gameboard = () => {
  let gbWidth = 10;
  let gbHeight = 10;
  let gbHealth = 17;
  const gb = Array(gbWidth)
    .fill(0)
    .map(() => Array(gbHeight).fill(0));
  const receiveMiss = (y, x) => {
    gb[y][x] = 2; //miss to = 2
  };
  const receiveHit = (y, x) => {
    gb[y][x] = 1; //hit to = 1
  };
  const getValue = (y, x) => {
    return gb[y][x];
  };
  return {
    getGameboard: () => {
      return gb;
    },
    hitMissHandler: (y, x) => {
      if (getValue(y, x) == 0) {
        return receiveMiss(y, x);
      } else if (getValue(y, x) == 1 || getValue(y, x) == 2) {
        return console.log("invalid");
      } else {
        gbHealth--;
        return receiveHit(y, x);
      }
    },
    placeShip: (ship, posY, posX, orientation) => {
      if (orientation == "H") {
        for (let i = 0; i < ship.size; i++) {
          gb[posY][posX + i] = ship.code; // need to add check location
        }
      } else if (orientation == "V") {
        for (let i = 0; i < ship.size; i++) {
          gb[posY + i][posX] = ship.code;
        }
      }
    },
    getHealth: () => {
      return gbHealth;
    },
    getLoss: () => {
      if (gbHealth <= 0) {
        return true;
      } else {
        return false;
      }
    },
    testGetValue: (y, x) => {
      return gb[y][x];
    },
  };
};
