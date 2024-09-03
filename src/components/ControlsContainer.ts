import { BaseContainer, CtaButton, LeftButton, RightButton } from "./";

export class ControlsContainer extends BaseContainer {
  private ctaButton: CtaButton;
  private leftButton: LeftButton;
  private rightButton: RightButton;

  constructor() {
    super();

    this.leftButton = new LeftButton();
    this.rightButton = new RightButton();
    this.ctaButton = new CtaButton();
    this.ctaButton.position.set(0, -32);

    this.addChild(this.leftButton);
    this.addChild(this.rightButton);
    this.addChild(this.ctaButton);
  }

  onResize(screenWidth: number, screenHeight: number) {
    this.position.set(screenWidth * 0.5, screenHeight - 32);

    this.leftButton.position.set(screenWidth > 500 ? -160 : -screenWidth * 0.5 + 32, 0);
    this.leftButton.scale.set(0.75);

    this.rightButton.position.set(screenWidth > 500 ? 160 : screenWidth * 0.5 - 32, 0);
    this.rightButton.scale.set(0.75);

    this.ctaButton.scale.set(0.6);

    this.scale.set(Math.min(1.2, Math.max(0.8, screenWidth / 600)));
  }
}
