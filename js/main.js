import Player from "./player.js";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const gravity = 0.7;
const floor = { width: 0, height: 45 };
const player1_properties = [{ x: 20, y: 20 }, 50, 150, "red", { x: 0, y: 0 }];
const player1 = new Player(...player1_properties);
const player2_properties = [{ x: 120, y: 20 }, 50, 150, "blue", { x: 0, y: 0 }];

function drawFloor() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, canvas.height - floor.height, canvas.width, floor.height);
}
const player2 = new Player(...player2_properties);
animate();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleGravity()
  drawFloor()
  player1.draw(ctx);
  player2.draw(ctx);
}
function handleGravity() {
  if (
    player1.position.y + player1.height + floor.height + player1.velocity.y >=
    canvas.height
  ) {
    player1.setVelocity({ x: 0, y: 0 });
  } else {
    player1.setVelocity({ x: 0, y: player1.velocity.y + gravity });
  }
  if (
    player2.position.y + player1.height + floor.height + player2.velocity.y >=
    canvas.height
  ) {
    player2.setVelocity({ x: 0, y: 0 });
  } else {
    player2.setVelocity({ x: 0, y: player2.velocity.y + gravity });
  }
}
function animate() {
  canvas.width = window.innerWidth - 1;
  canvas.height = window.innerHeight - 1;
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener("keydown", (evt) => {
  rectangleCollision(player1, player2);
  switch (evt.key) {
    case "ArrowUp":
      player1.moveUp(20);
      break;
    case "ArrowDown":
      player1.moveDown();
      break;

    case "ArrowLeft":
      player1.moveLeft();
      break;
    case "ArrowRight":
      player1.moveRight();
      break;
    default:
      break;
  }
});
window.addEventListener("keydown", (evt) => {
  //player2
  switch (evt.key) {
    case "w":
      player2.moveUp(20);
      break;
    case "z":
      player2.moveDown();
      break;

    case "a":
      player2.moveLeft();
      break;
    case "s":
      player2.moveRight();
      break;
    default:
      break;
  }
});

function rectangleCollision(rectangle1, rectangle2) {
  if (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width
  ) {
    console.log("go");
  }
}
