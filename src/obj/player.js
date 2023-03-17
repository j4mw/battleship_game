import { gameboard } from "./gameboard";

export const Player = (name, type) => {
  const playerBoard = gameboard(name);
  return {
    playerBoard: () => {
      return playerBoard.getGameboard();
    },
    playerAttack: (y, x) => {
      playerBoard.hitMissHandler(y, x);
    },
    playerPlaceShip: (ship, posY, posX, orientation) => {
      playerBoard.placeShip(ship, posY, posX, orientation);
    },
    playerHealth: () => {
      return playerBoard.getHealth();
    },
    playerLoss: () => {
      return playerBoard.getLoss();
    },
    cpuTurn: () => {},
    playerName: () => {
      return name;
    },
    playerType: () => {
      return type;
    },
    playerJSONgb: () => {
      return playerBoard.arrayToJSON();
    },
  };
};
