import Player from "./player.js";
export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.velocity = { x: 0, y: 10 };
    const player1_properties = [{ x: 20, y: 20 }, 20, 20, "red", this.velocity];
    this.player1 = new Player(...player1_properties);
    const player2_properties = [
      { x: 120, y: 20 },
      20,
      20,
      "blue",
      this.velocity,
    ];
    this.player2 = new Player(...player2_properties);
    this.floor = { width: 0, height: 45 };
    this.#addEventListener();
  }

  #addEventListener() {
    window.addEventListener("keydown", (evt) => {
      switch (evt.key) {
        case "ArrowUp":
          this.player1.moveUp(20);
          break;
        case "ArrowDown":
          this.player1.moveDown();
          break;

        case "ArrowLeft":
          this.player1.moveLeft();
          break;
        case "ArrowRight":
          this.player1.moveRight();
          break;

        default:
          break;
      }
    });
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player1.draw(this.ctx);
    this.player2.draw(this.ctx);
    this.update();
  }

  drawFloor() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(
      0,
      this.canvas.height - this.floor.height,
      this.canvas.width,
      this.floor.height
    );
  }
  update() {
    this.drawFloor();
    const player1 = this.player1.getPlayer();
    const player2 = this.player2.getPlayer();

    if (player1.y + player1.height + this.floor.height >= this.canvas.height) {
      this.player1.setVelocity({ x: 0, y: 0 });
    } else {
      this.player1.setVelocity({ x: 0, y: 10 });
    }
    if (player2.y + player1.height + this.floor.height >= this.canvas.height) {
      this.player2.setVelocity({ x: 0, y: 0 });
    } else {
      this.player2.setVelocity({ x: 0, y: 10 });
    }
  }
}
