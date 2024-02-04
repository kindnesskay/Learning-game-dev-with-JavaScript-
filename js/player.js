export default class Player {
  constructor(position, width, height, color, velocity) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.color = color;
    this.speed = 4;
    this.velocity = velocity;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.update();
  }

  update() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
  }
  setVelocity(velocity) {
    this.velocity = velocity;
  }
  getPlayer() {
    return { ...this.position, height: this.height, width: this.width,velocity:this.velocity };
  }
  moveUp(num=5) {
    this.velocity.y-=num;
  }
  moveDown() {
    this.position.y += 2 * this.speed;
  }
  moveLeft() {
    this.position.x -= 2 * this.speed;
  }
  moveRight(num=5) {
    this.velocity.x-=num
  }
}
