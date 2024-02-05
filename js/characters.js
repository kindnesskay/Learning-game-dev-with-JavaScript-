import Player from "./player.js";

export const player1 = new Player({
  position: { x: 20, y: 20 },
  color: "red",
  velocity: { x: 0, y: 0 },
  health: 100,
});
export const player2 = new Player({
  position: { x: 550, y: 20 },
  color: "blue",
  velocity: { x: 0, y: 0 },
  offset: { x: 100, y: 0 },
  health: 100,
});
