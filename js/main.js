import Game from "./game.js";
const canvas = document.getElementById("myCanvas");
const game = new Game(canvas);

animate();
function animate() {
  canvas.width = window.innerWidth - 1;
  canvas.height = window.innerHeight - 1;
  game.draw();
  requestAnimationFrame(animate);
}
