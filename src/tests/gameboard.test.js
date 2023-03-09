import { test, expect, describe } from "vitest";
import { gameboard } from "../obj/gameboard";
import { makeShip } from "../obj/availableShips";

const gbTest = gameboard();
const destroyer = makeShip("Destroyer");
gbTest.placeShip(destroyer, 2, 2, "H");

describe("Gameboard Factory", () => {
  test("Gameboard - hitMissHandler", () => {
    gbTest.hitMissHandler(1, 1);
    gbTest.hitMissHandler(2, 2);
    expect(gbTest.testGetValue(1, 1)).toBe(2); // to be miss
    expect(gbTest.testGetValue(2, 2)).toBe(1); // to be hit
    expect(gbTest.testGetValue(0, 0)).toBe(0); // to be empty cell
  });
  test("Gameboard - getLoss", () => {
    expect(gbTest.getLoss()).toEqual(false);
  });
});
