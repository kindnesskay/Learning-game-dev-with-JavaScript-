import { handleBorders, rectangleCollision } from "../utils/index.js";
import { keys, floor, speed, gravity } from "./properties.js";
import { player1, player2 } from "./characters.js";
let time = 6;

const timer = document.getElementById("timer");
const canvas = document.getElementById("myCanvas");
const health_bar_left = document.getElementById("health-bar-1");
const health_bar_right = document.getElementById("health-bar-2");
const ctx = canvas.getContext("2d");
const image1 = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
image1.src = "../assets/background/background_layer_1.png";
image2.src = "../assets/background/background_layer_2.png";
image3.src = "../assets/background/background_layer_3.png";
image4.src = "../assets/background/background_layer_4.png";
function drawFloor() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, canvas.height - floor.height, canvas.width, floor.height);
}
function handleTimer() {
  if (time < 1) {
    clearInterval(myInterval);
  }
  const myInterval = setInterval(() => {
    time -= 1;
    timer.innerHTML = time;
  }, 1000);
}
function handleHit(player, health) {
  health.style.width = `${player.health}%`;
}
animate();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(image2, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(image3, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(image4, 0, 0, canvas.width, canvas.height);
  handleGravity();
  handleKeys();
  handleBorders(player1, canvas);
  handleBorders(player2, canvas);
  rectangleCollision(player1, player2);

  player1.draw(ctx);
  health_bar_left.style.width = player1.health + "%";
  player2.draw(ctx);
  health_bar_right.style.width = player2.health + "%";
}
function handleKeys() {
  if (keys.ArrowRight.pressed) {
    player1.velocity.x = speed;
  }
  if (keys.ArrowLeft.pressed) {
    player1.velocity.x = -speed;
  }
  if (keys.space.pressed) {
    player1.attack();

    if (player1.isAttacking) {
      const hit = rectangleCollision(player1.weapon, player2);
      if (hit && player1.isAttacking) {
        console.log(hit);
        player2.health -= 10;
      }
    }
  }

  if (keys.s.pressed) {
    player2.velocity.x = speed;
  }
  if (keys.a.pressed) {
    player2.velocity.x = -speed;
  }
  if (keys.d.pressed) {
    player2.attack();
    if (player2.isAttacking) {
      const hit = rectangleCollision(player1.weapon, player2);
      // if (hit) {
      //   player1.health -= 10;
      // }
      console.log(hit);
    }
  }
}
function handleGravity() {
  if (
    player1.position.y + player1.height + floor.height + player1.velocity.y >=
    canvas.height
  ) {
    player1.velocity.y = 0;
  } else {
    player1.velocity.y = player1.velocity.y + gravity;
  }
  if (
    player2.position.y + player1.height + floor.height + player2.velocity.y >=
    canvas.height
  ) {
    player2.velocity.y = 0;
  } else {
    player2.velocity.y = player2.velocity.y + gravity;
  }
}

function animate() {
  canvas.width = window.innerWidth - 1;
  canvas.height = window.innerHeight - 1;
  draw();

  requestAnimationFrame(animate);
}

window.addEventListener("keydown", (evt) => {
  switch (evt.key) {
    case "ArrowUp":
      player1.moveUp(20);
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case " ":
      keys.space.pressed = true;
      break;
    // player2
    case "w":
      player2.moveUp(20);
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;

    default:
      break;
  }
});
window.addEventListener("keyup", (evt) => {
  switch (evt.key) {
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;
      break;
    // player 2
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    default:
      break;
  }
});
