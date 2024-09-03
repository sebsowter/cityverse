import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class CtaButton extends Container {
  constructor() {
    super();

    const bg = this.addChild(Sprite.from("bot"));
    bg.blendMode = "screen";
    bg.anchor.set(0.5, 1);
    bg.scale.set(1.4);

    const light = this.addChild(Sprite.from("light"));
    light.blendMode = "screen";
    light.anchor.set(0.5, 1);
    light.scale.set(1.4);

    const cta = this.addChild(Sprite.from("button_cta"));
    cta.anchor.set(0.5);
    cta.position.set(-6, -212);

    const icon = this.addChild(Sprite.from("dice_icon"));
    icon.blendMode = "screen";
    icon.anchor.set(0.5);
    icon.y = -232;

    const button = new Button(this);
    button.onPress.connect(() => console.log("Click CTA"));
  }
}
