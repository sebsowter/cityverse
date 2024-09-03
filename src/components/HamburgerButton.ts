import { Button } from "@pixi/ui";
import { Sprite, Texture } from "pixi.js";

export class HamburgerButton extends Sprite {
  constructor() {
    super(Texture.from("hamburger"));

    this.anchor.set(0.5);
    this.scale.set(0.6);

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click hamburger"));
  }
}
