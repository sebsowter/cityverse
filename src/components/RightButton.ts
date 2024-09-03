import { Button } from "@pixi/ui";
import { Container, Sprite } from "pixi.js";

export class RightButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("./assets/images/ui/button_right.png"));
    sprite.anchor.set(0.5, 1);
    sprite.scale.set(0.8);

    const icon = this.addChild(Sprite.from("./assets/images/ui/news_icon.png"));
    icon.anchor.set(0.5, 1);
    //icon.scale.set(0.5);
    icon.position.set(0, -32);
    icon.scale.set(1);

    const button = new Button(this);
    button.onPress.connect(() => console.log("onPress"));
  }
}
