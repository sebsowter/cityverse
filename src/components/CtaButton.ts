import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class CtaButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("button_cta"));
    sprite.anchor.set(0.5);
    sprite.scale.set(0.5);
    sprite.x = -4;

    const icon = this.addChild(Sprite.from("dice_icon"));
    icon.blendMode = "screen";
    icon.anchor.set(0.5);
    icon.scale.set(0.6);
    icon.position.set(-6, -16);

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click CTA"));
  }
}
