export const Ship = (type, code, size, health) => {
  // make hit function --1 from health on each call
  const hit = () => {};
  // checkSunk to see if health is = 0
  const checkSunk = () => {};
  return { type, code, size, health, hit, checkSunk };
};
