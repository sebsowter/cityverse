import { Sprite, Texture } from "pixi.js";

export class Player extends Sprite {
  constructor() {
    super(Texture.from("avatar"));

    this.setSize(44, 44);
    this.anchor.set(0.5);
  }
}
