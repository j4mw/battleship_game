import { test, expect, describe } from "vitest";
import { Ship } from "../obj/shipFactory";

describe("Ship Factory", () => {
  const destroyer = Ship("Destroyer", 3);
  test("Ship type", () => {
    expect(destroyer.type).toBe("Destroyer");
  });
  test("Ship size", () => {
    expect(destroyer.size).toEqual(3);
  });
});
