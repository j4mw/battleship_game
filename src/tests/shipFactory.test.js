import { test, expect, describe } from "vitest";
import { Ship } from "../obj/shipFactory";
import { findShip } from "../obj/availableShips";

describe("Ship Factory", () => {
  const ship1 = Ship(findShip("Destroyer").type, findShip("Destroyer").size);
  test("Ship type", () => {
    expect(ship1.type).toBe("Destroyer");
  });
  test("Ship size", () => {
    expect(ship1.size).toEqual(3);
  });
  test("Ship health", () => {
    //combined health check as checking array wasnt working?
    expect(ship1.health).toHaveLength(3);
    expect(ship1.health).toContain(1);
  });
});
