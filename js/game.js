import Player from "./player.js";
export default class Game {
  constructor(canvas) {
    this.gravity = 0.7;
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    const player1_properties = [
      { x: 20, y: 20 },
      50,
      150,
      "red",
      { x: 0, y: 0 },
    ];
    this.player1 = new Player(...player1_properties);
    const player2_properties = [
      { x: 120, y: 20 },
      50,
      150,
      "blue",
      { x: 0, y: 0 },
    ];
    this.player2 = new Player(...player2_properties);
    this.floor = { width: 0, height: 45 };
    this.#addEventListener();
  }

  rectangleCollision(rectangle1, rectangle2) {
    if (
      rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
      rectangle1.position.x  <=
        rectangle2.position.x + rectangle2.width
    ) {
      console.log("go");
    }
  }
  #addEventListener() {
    window.addEventListener("keydown", (evt) => {
      this.rectangleCollision(this.player1, this.player2);
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
    window.addEventListener("keydown", (evt) => {
      //player2
      switch (evt.key) {
        case "w":
          this.player2.moveUp(20);
          break;
        case "z":
          this.player2.moveDown();
          break;

        case "a":
          this.player2.moveLeft();
          break;
        case "s":
          this.player2.moveRight();
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

    
  }
}
