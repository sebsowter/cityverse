import { Container, Graphics, Sprite } from "pixi.js";

export class Coins extends Container {
  constructor() {
    super();

    const width = 144;
    const height = 48;

    this.addChild(new Graphics())
      .roundRect(-width * 0.5, -height * 0.5, width, height, height * 0.5)
      .fill({ alpha: 0.25, color: 0x000000 });

    const coin = this.addChild(Sprite.from("coin"));
    coin.setSize(40, 40);
    coin.anchor.set(0.5);
    coin.position.set(-width * 0.5 + height * 0.5, 0);

    const plus = this.addChild(Sprite.from("plus"));
    plus.setSize(28, 28);
    plus.anchor.set(0.5);
    plus.position.set(width * 0.5 - height * 0.5, 0);
  }
}
