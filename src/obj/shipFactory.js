export const Ship = (type, code, size) => {
  let shipStatus = "active";
  const health = new Array(size).fill(1);
  const hit = (i) => {
    health[i] = 0;
    return health;
  };
  const checkSunk = () => {
    let healthVal = health.reduce((a, b) => a + b, 0);
    if (healthVal == 0) {
      shipStatus = "destroyed";
      return `${type} ${shipStatus}`;
    } else {
      return `${type} ${shipStatus}`;
    }
  };
  return { type, code, size, health, hit, checkSunk };
};
