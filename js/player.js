export default class Player {
  constructor({position, width=50, height=150, color, velocity,offset={x:0,y:0},health}) {
    this.width = width;
    this.height = height;
    this.position = position;
    this.color = color;
    this.speed = 4;
    this.velocity = velocity;
    this.weapon = {
      position:{x: this.position.x,
      y: this.position.y},
      width: 100,
      height: 50,
      offset,
      color: "green",
    };
    this.ctx = "";
    this.isAttacking = false;
    this.health=health
  }

  draw(ctx) {
    this.ctx = ctx;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.#weapon()
    this.update();
  }

  update() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.weapon.position.x = this.position.x;
    this.weapon.position.y = this.position.y;
    this.velocity.x = 0;
  }
  #weapon() {
    if(!this.isAttacking)return
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.weapon.position.x - this.weapon.offset.x, this.weapon.position.y, this.weapon.width,this.weapon.height);
  }
    attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking=false
    }, 100);
  }
  moveUp(num = 5) {
    this.velocity.y -= num;
  }

  moveLeft(num = 5) {
    this.velocity.x - num;
  }
  moveRight(num = 5) {
    this.velocity.x + num;
  }
}
