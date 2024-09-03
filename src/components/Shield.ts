import { Button } from "@pixi/ui";
import { Sprite, Texture } from "pixi.js";

export class Shield extends Sprite {
  constructor() {
    super(Texture.from("shield"));

    this.anchor.set(0.5);
    this.scale.set(0.5);

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click shield"));
  }
}
