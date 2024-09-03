import { Button } from "@pixi/ui";
import { Container, DestroyOptions, Sprite } from "pixi.js";

export class ShieldButton extends Container {
  constructor() {
    super();

    const sprite = this.addChild(Sprite.from("./assets/images/ui/shield.png"));
    sprite.anchor.set(0.5);
    sprite.scale.set(0.5);

    const button = new Button(this);
    button.onPress.connect(() => console.log("onPress"));
  }

  onResize(screenWidth: number, screenHeight: number) {
    // this.position.set(screenWidth - 32, 32);
  }
}
