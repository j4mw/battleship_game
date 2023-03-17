import { p1, cpu } from "../../../main";

export const pageGen = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  container.appendChild(makeGameboardPlayer("player"));
  container.appendChild(makeGameboardCpu("cpu"));
};

export const makeGameboardPlayer = (playerType) => {
  const gameboard = document.createElement("div");
  gameboard.className = "grid";
  gameboard.id = playerType + "gameboard";
  p1.playerBoard().forEach((el) => {
    el.forEach((el2) => {
      gameboard.appendChild(makeGameboardCell(el2));
    });
  });
  return gameboard;
};

export const makeGameboardCpu = (playerType) => {
  const gameboard = document.createElement("div");
  gameboard.className = "grid";
  gameboard.id = playerType + "gameboard";
  cpu.playerBoard().forEach((el) => {
    el.forEach((el2) => {
      gameboard.appendChild(makeGameboardCell(el2));
    });
  });
  return gameboard;
};

export const makeGameboardCell = (content) => {
  const gameboardCell = document.createElement("div");
  gameboardCell.className = "cell" + " " + content;
  gameboardCell.textContent = content;
  return gameboardCell;
};
