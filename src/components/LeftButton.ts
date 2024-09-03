import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class LeftButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("button_left"));
    sprite.anchor.set(0.5, 1);
    sprite.scale.set(0.75);

    const icon = this.addChild(Sprite.from("home_icon"));
    icon.anchor.set(0.5, 1);
    icon.position.set(0, -32);
    icon.scale.set(0.9);

    const button = new Button(this);
    button.onPress.connect(() => console.log("onPress"));
  }
}
