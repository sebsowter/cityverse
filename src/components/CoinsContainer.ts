import { Container, Graphics, Sprite } from "pixi.js";

export class CoinsContainer extends Container {
  constructor() {
    super();

    const width = 128;
    const height = 48;

    this.addChild(new Graphics())
      .roundRect(-width * 0.5, -height * 0.5, width, height, height * 0.5)
      .fill({ alpha: 0.25, color: 0x000000 });

    const sprite = this.addChild(Sprite.from("coin"));
    sprite.anchor.set(0.5);
    sprite.setSize(40, 40);
    sprite.position.set(-width * 0.5 + height * 0.5, 0);
  }
}
