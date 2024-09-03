import { Sprite, Texture } from "pixi.js";

export class Cloud extends Sprite {
  speed: number;

  constructor(texture: string, speed: number) {
    super(Texture.from(texture));

    this.anchor.set(0.5);
    this.speed = speed;
  }
}
