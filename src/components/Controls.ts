import { Container } from "pixi.js";

import { Cta, LeftButton, RightButton } from ".";

export class Controls extends Container {
  private cta: Cta;
  private leftButton: LeftButton;
  private rightButton: RightButton;

  constructor() {
    super();

    this.leftButton = new LeftButton();
    this.leftButton.y = -24;
    this.rightButton = new RightButton();
    this.rightButton.y = -24;
    this.cta = new Cta();

    this.addChild(this.cta);
    this.addChild(this.leftButton);
    this.addChild(this.rightButton);
  }

  resize(screenWidth: number, screenHeight: number) {
    const minScale = 0.6;
    const maxScale = Math.max(minScale, Math.min(1, screenHeight / 480));
    const scale = Math.min(maxScale, Math.max(minScale, screenWidth / 520));

    this.position.set(screenWidth * 0.5, screenHeight);
    this.leftButton.position.set(-screenWidth * 0.5 + 100 * scale, scale * -32);
    this.leftButton.scale.set(scale);
    this.rightButton.position.set(screenWidth * 0.5 - 100 * scale, scale * -32);
    this.rightButton.scale.set(scale);
    this.cta.scale.set(scale);
  }
}
