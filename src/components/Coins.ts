import { Container, Sprite, Text, TextStyle } from "pixi.js";

export class Coins extends Container {
  constructor() {
    super();

    const width = 200;
    const height = 48;

    const bg = this.addChild(Sprite.from("coin_bg"));
    bg.anchor.set(0.5);
    bg.scale.set(0.5);

    const coin = this.addChild(Sprite.from("coin"));
    coin.setSize(40, 40);
    coin.anchor.set(0.5);
    coin.x = (-width + height) * 0.5;

    const plus = this.addChild(Sprite.from("plus"));
    plus.setSize(28, 28);
    plus.anchor.set(0.5);
    plus.x = (width - height) * 0.5;

    const style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 18,
    });

    const text = new Text({
      style,
      text: "user: 1715600095720",
    });
    text.anchor.set(0.5);
    text.y = 48;

    this.addChild(text);
  }
}
