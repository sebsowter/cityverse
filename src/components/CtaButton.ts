import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class CtaButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("button_cta"));
    sprite.anchor.set(0.5, 1);

    const icon = this.addChild(Sprite.from("button_dice_icon"));
    icon.anchor.set(0.5, 1);
    icon.position.set(0, -128);

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click CTA"));
  }
}
