import { Container } from "pixi.js";

import { CoinsContainer, HamburgerButton, PlayerContainer, ShieldButton } from "./";

export class HeaderContainer extends Container {
  private hamburgerButton: HamburgerButton;
  private coinsContainer: CoinsContainer;
  private playerContainer: PlayerContainer;
  private crownContainer: PlayerContainer;
  private shieldButton: ShieldButton;

  constructor() {
    super();

    this.hamburgerButton = new HamburgerButton();
    this.coinsContainer = new CoinsContainer();
    this.playerContainer = new PlayerContainer();
    this.crownContainer = new PlayerContainer();
    this.shieldButton = new ShieldButton();

    this.addChild(this.playerContainer);
    this.addChild(this.crownContainer);
    this.addChild(this.coinsContainer);
    this.addChild(this.shieldButton);
    this.addChild(this.hamburgerButton);
  }

  resize(screenWidth: number, _screenHeight: number) {
    const isLarge = screenWidth > 480;

    this.position.set(screenWidth * 0.5, 0);
    this.hamburgerButton.position.set(-screenWidth * 0.5 + 40, 40);
    this.coinsContainer.position.set(0, isLarge ? 40 : 96);
    this.playerContainer.position.set(isLarge ? -120 : -52, 40);
    this.crownContainer.position.set(isLarge ? 120 : 52, 40);
    this.shieldButton.position.set(screenWidth * 0.5 - 40, 40);
  }
}
