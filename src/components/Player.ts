import { Sprite, Texture } from "pixi.js";

export class Player extends Sprite {
  constructor() {
    super(Texture.from("avatar"));

    this.setSize(40, 40);
    this.anchor.set(0.5);
  }
}
