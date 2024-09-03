import { Sprite, Texture } from "pixi.js";

export class City extends Sprite {
  constructor() {
    super(Texture.from("city"));

    this.anchor.set(0.5);
  }

  resize(screenWidth: number, screenHeight: number) {
    const minScale = 0.2;
    const maxScale = Math.max(minScale, Math.min(0.6, screenHeight / 1280));

    this.position.set(screenWidth * 0.5, screenHeight * 0.55);
    this.scale.set(Math.min(maxScale, Math.max(minScale, screenWidth / 1080)));
  }
}
