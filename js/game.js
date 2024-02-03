import Player from "./player.js";
export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.velocity={x:0,y:10}
    const player1_properties = [{x:20, y:20}, 20, 20, "red", this.velocity];
    this.player1 = new Player(...player1_properties);
    const player2_properties = [{x:120, y:20}, 20, 20, "blue", this.velocity];
    this.player2 = new Player(...player2_properties);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player1.draw(this.ctx)
    this.player2.draw(this.ctx)
  }
}
