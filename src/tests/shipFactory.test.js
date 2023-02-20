import { test, expect, describe } from "vitest";
import { makeShip } from "../obj/availableShips";

const destroyer = makeShip("Destroyer");

describe("Ship Factory", () => {
  test("Ship type", () => {
    expect(destroyer.type).toBe("Destroyer");
  });
  test("Ship size", () => {
    expect(destroyer.size).toEqual(3);
  });
});
