import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class RightButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("button_right"));
    sprite.anchor.set(0.5, 1);
    sprite.scale.set(0.7);

    const icon = this.addChild(Sprite.from("news_icon"));
    icon.blendMode = "screen";
    icon.anchor.set(0.5, 1);
    icon.position.set(0, -36);
    icon.scale.set(0.75);

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click news"));
  }
}
