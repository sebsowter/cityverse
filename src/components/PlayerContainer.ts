import { Container, Graphics, Sprite } from "pixi.js";

export class PlayerContainer extends Container {
  constructor() {
    super();

    const width = 96;
    const height = 40;

    const graphics = new Graphics();
    graphics.roundRect(-width * 0.5, -height * 0.5, width, height, height / 2).fill({ alpha: 0.5, color: 0x000000 });

    const sprite = this.addChild(Sprite.from("./assets/images/ui/avatar.png"));
    sprite.anchor.set(0.5);
    sprite.setSize(36, 36);
    sprite.position.set(-width * 0.5 + height * 0.5, 0);

    this.addChild(graphics);
    this.addChild(sprite);
  }

  onResize(screenWidth: number, _screenHeight: number) {
    // this.position.set(screenWidth * 0.25, 32);
  }
}
