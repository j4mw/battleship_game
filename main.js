// import { gameboard } from "./src/obj/gameboard";
import { make } from "acorn-walk";
import { makeShip } from "./src/obj/availableShips";

// const gb1 = gameboard();
// const destroyer = makeShip("Destroyer");
// const carrier = makeShip("Carrier");
// gb1.placeShip(destroyer, 9, 1, "H");
// gb1.placeShip(carrier, 0, 2, "V");
// console.log(gb1.getHealth());
// gb1.hitMissHandler(2, 2);
// console.log(gb1.getHealth());
// gb1.hitMissHandler(0, 2);
// console.log(gb1.getHealth());
// gb1.getLoss();
// console.table(gb1.getGameboard());

import { Player } from "./src/obj/player";

// install fleet
const carrier = makeShip("Carrier");
const battleship = makeShip("Battleship");
const destroyer = makeShip("Destroyer");
const submarine = makeShip("Submarine");
const patrolBoat = makeShip("Patrol Boat");

export const p1 = Player("Player 1", "Player");
export const cpu = Player("Computer", "CPU");
console.log(p1.playerName());
// console.table(p1.playerBoard());
p1.playerPlaceShip(carrier, 1, 1, "V");
p1.playerPlaceShip(battleship, 3, 4, "H");
p1.playerPlaceShip(destroyer, 9, 0, "H");
p1.playerPlaceShip(submarine, 7, 5, "H");
p1.playerPlaceShip(patrolBoat, 0, 9, "V");
p1.playerAttack(3, 6);
p1.playerAttack(0, 0);
p1.playerAttack(0, 1);
p1.playerAttack(1, 1);
p1.playerAttack(2, 2);
console.log(`health = ${p1.playerHealth()}`);
console.table(p1.playerBoard());

console.log(cpu.playerName());

cpu.playerPlaceShip(carrier, 1, 6, "V");
cpu.playerPlaceShip(battleship, 5, 1, "H");
cpu.playerPlaceShip(destroyer, 4, 8, "V");
cpu.playerPlaceShip(submarine, 0, 0, "H");
cpu.playerPlaceShip(patrolBoat, 8, 3, "H");
cpu.playerAttack(1, 6);
console.log(`health = ${cpu.playerHealth()}`);
console.table(cpu.playerBoard());

// console.log(p1.playerHealth());
// p1.playerAttack(4, 3);
// console.log(p1.playerHealth());
// p1.playerAttack(4, 4);
// p1.playerAttack(4, 4);
// console.log(p1.playerHealth());
// console.log(p1.playerHealth());
// console.log(p1.playerLoss());
// console.table(p1.playerBoard());
// p1.cpuTurn();

import { pageGen } from "./src/obj/ui/display";

pageGen();
