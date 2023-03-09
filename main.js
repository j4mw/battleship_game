import { gameboard } from "./src/obj/gameboard";
import { makeShip } from "./src/obj/availableShips";

const gb1 = gameboard();
const destroyer = makeShip("Destroyer");
const carrier = makeShip("Carrier");
gb1.placeShip(destroyer, 9, 1, "H");
gb1.placeShip(carrier, 0, 2, "V");
console.log(gb1.getHealth());
gb1.hitMissHandler(2, 2);
console.log(gb1.getHealth());
gb1.hitMissHandler(0, 2);
console.log(gb1.getHealth());
gb1.getLoss();
console.table(gb1.getGameboard());
