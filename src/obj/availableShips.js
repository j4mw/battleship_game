import { Ship } from "./shipFactory";

const availableShips = [
  {
    type: "Carrier",
    code: "C",
    size: 5,
    health: 5,
    status: "active",
  },
  {
    type: "Battleship",
    code: "B",
    size: 4,
    health: 4,
    status: "active",
  },
  {
    type: "Destroyer",
    code: "D",
    size: 3,
    health: 3,
    status: "active",
  },
  {
    type: "Submarine",
    code: "S",
    size: 3,
    health: 3,
    status: "active",
  },
  {
    type: "Patrol Boat",
    code: "PB",
    size: 2,
    health: 2,
    status: "active",
  },
];

// TODO will need to have check/throw for this one
export const makeShip = (ship) => {
  const findShip = availableShips.find((t) => t.type === ship);
  const thisShip = Ship(
    findShip.type,
    findShip.code,
    findShip.size,
    findShip.health
  );
  return thisShip;
};
