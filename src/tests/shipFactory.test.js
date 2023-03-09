import { test, expect, describe } from "vitest";
import { makeShip } from "../obj/availableShips";

const destroyer = makeShip("Destroyer");

describe("Ship Factory", () => {
  test("Ship type", () => {
    expect(destroyer.type).toBe("Destroyer");
  });
  test("Ship size", () => {
    expect(destroyer.size).toBe(3);
  });
  test("Ship hit (-1)", () => {
    destroyer.hit();
    expect(destroyer.getHealth()).toBe(2);
  });
  test("Ship sunk", () => {
    destroyer.hit();
    destroyer.hit();
    destroyer.checkSunk();
    expect(destroyer.getSunk()).toBe(true);
  });
});
