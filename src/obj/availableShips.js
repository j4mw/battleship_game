import { Ship } from "./shipFactory";

const availableShips = [
  {
    type: "Carrier",
    code: "C",
    size: 5,
  },
  {
    type: "Battleship",
    code: "B",
    size: 4,
  },
  {
    type: "Destroyer",
    code: "D",
    size: 3,
  },
  {
    type: "Submarine",
    code: "S",
    size: 3,
  },
  {
    type: "Patrol Boat",
    code: "PB",
    size: 2,
  },
];

// TODO will need to have check/throw for this one
export const makeShip = (ship) => {
  const findShip = availableShips.find((t) => t.type === ship);
  const thisShip = Ship(findShip.type, findShip.code, findShip.size);
  return thisShip;
};
