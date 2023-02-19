const availableShips = [
  {
    type: "Carrier",
    size: 5,
    health: [1, 1, 1, 1, 1],
  },
  {
    type: "Battleship",
    size: 4,
    health: [1, 1, 1, 1],
  },
  {
    type: "Destroyer",
    size: 3,
    health: [1, 1, 1],
  },
  {
    type: "Submarine",
    size: 3,
    health: [1, 1, 1],
  },
  {
    type: "Patrol Boat",
    size: 2,
    health: [1, 1],
  },
];

// used to find ship info without having to rewrite .find()
export const findShip = (ship) => {
  return availableShips.find((t) => t.type === ship);
};
