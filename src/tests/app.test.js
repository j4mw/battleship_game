import { test, expect, describe } from "vitest";
import { testFunc, Ship } from "../obj/app";

test("testFunc", () => {
  expect(testFunc(1, 2)).toBe(3);
});
