import { Sprite, Texture } from "pixi.js";

export class CitySprite extends Sprite {
  constructor() {
    super(Texture.from("./assets/images/city.png"));

    this.anchor.set(0.5);
    this.scale.set(1);
  }

  onResize(screenWidth: number, screenHeight: number) {
    this.position.set(screenWidth * 0.5, screenHeight * 0.5);
    this.scale.set(Math.min(1.5, Math.max(0.8, screenWidth / 600)));
  }
}
