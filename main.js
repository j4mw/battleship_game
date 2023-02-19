import { Ship } from "./src/obj/shipFactory";
import { findShip } from "./src/obj/availableShips";

const carrier = Ship(
  findShip("Carrier").type,
  findShip("Carrier").code,
  findShip("Carrier").size
);

carrier.hit(0);
carrier.hit(1);
carrier.hit(2);
carrier.hit(3);
console.log(carrier.health);
console.log(carrier.checkSunk());
