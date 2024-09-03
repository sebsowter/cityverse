import { Sprite, Texture } from "pixi.js";

export class Bg extends Sprite {
  constructor() {
    super(Texture.from("bg"));

    this.anchor.set(0, 1);
  }

  resize(screenWidth: number, screenHeight: number) {
    const scale = screenWidth / 1200;

    this.y = screenHeight;
    this.scale.set(scale);
  }
}
