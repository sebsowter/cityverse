import { Container } from "pixi.js";

import { CtaButton, LeftButton, RightButton } from ".";

export class Controls extends Container {
  private ctaButton: CtaButton;
  private leftButton: LeftButton;
  private rightButton: RightButton;

  constructor() {
    super();

    this.leftButton = new LeftButton();
    this.rightButton = new RightButton();
    this.ctaButton = new CtaButton();

    this.addChild(this.ctaButton);
    this.addChild(this.leftButton);
    this.addChild(this.rightButton);
  }

  resize(screenWidth: number, screenHeight: number) {
    const minScale = 0.8;
    const maxScale = Math.max(minScale, Math.min(1.2, screenHeight / 640));

    this.position.set(screenWidth * 0.5, screenHeight);
    this.leftButton.position.set(-screenWidth * 0.5 + 80, -32);
    this.leftButton.scale.set(0.75);
    this.rightButton.position.set(screenWidth * 0.5 - 80, -32);
    this.rightButton.scale.set(0.75);
    this.ctaButton.scale.set(0.5);
    //this.ctaButton.y = screenHeight;
    //this.scale.set(Math.min(maxScale, Math.max(minScale, screenWidth / 400)));
  }
}
