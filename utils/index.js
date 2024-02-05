import { gravity, speed } from "../js/properties.js";
export function rectangleCollision(rectangle1, rectangle2) {
  if (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  ) {
    return true;
  }
  return false;
}

export function handleBorders(object, canvas) {
  if (object.position.x <= 0) {
    object.velocity.x += speed;
  }
  if (object.position.x + object.width >= canvas.width) {
    object.velocity.x -= speed;
  }
  if (object.position.y + 5 <= 50) {
    object.velocity.y = 0;
    object.velocity.y += gravity * 2;
  }
}
