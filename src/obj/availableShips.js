const availableShips = [
  {
    type: "Carrier",
    code: "C",
    size: 5,
    health: [1, 1, 1, 1, 1],
    status: "active",
  },
  {
    type: "Battleship",
    code: "B",
    size: 4,
    health: [1, 1, 1, 1],
    status: "active",
  },
  {
    type: "Destroyer",
    code: "D",
    size: 3,
    health: [1, 1, 1],
    status: "active",
  },
  {
    type: "Submarine",
    code: "S",
    size: 3,
    health: [1, 1, 1],
    status: "active",
  },
  {
    type: "Patrol Boat",
    code: "PB",
    size: 2,
    health: [1, 1],
    status: "active",
  },
];

// used to find ship info without having to rewrite .find()
export const findShip = (ship) => {
  return availableShips.find((t) => t.type === ship);
};
