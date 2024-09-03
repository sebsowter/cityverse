import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class CtaButton extends Container {
  constructor() {
    super();

    const button = new Button(this);
    button.onPress.connect(() => console.log("onPress"));

    const sprite = this.addChild(Sprite.from("./assets/images/ui/button_cta.png"));
    sprite.anchor.set(0.5, 1);
    //sprite.scale.set(0.5);

    const icon = this.addChild(Sprite.from("./assets/images/ui/button_dice_icon.png"));
    icon.anchor.set(0.5, 1);
    //icon.scale.set(0.5);
    icon.position.set(0, -128);
  }
}
