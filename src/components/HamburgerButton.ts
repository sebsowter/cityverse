import { Button } from "@pixi/ui";
import { Container, DestroyOptions, Sprite } from "pixi.js";

export class HamburgerButton extends Container {
  constructor() {
    super();

    const button = new Button(this);
    button.onPress.connect(() => console.log("onPress"));

    const sprite = this.addChild(Sprite.from("./assets/images/ui/top/hamburger_button.png"));
    sprite.anchor.set(0.5);
    sprite.scale.set(0.5);
  }

  onResize(screenWidth: number, screenHeight: number) {
    // this.position.set(32, 32);
  }
}
