import { Sprite, Texture } from "pixi.js";

export class City extends Sprite {
  constructor() {
    super(Texture.from("city"));

    this.anchor.set(0.5);
  }

  resize(screenWidth: number, screenHeight: number) {
    this.position.set(screenWidth * 0.5, screenHeight * 0.55);
    this.scale.set(Math.min(0.6, Math.max(0.2, screenWidth / 1080)));
  }
}
