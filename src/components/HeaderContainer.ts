import { BaseContainer, CoinsContainer, HamburgerButton, PlayerContainer, ShieldButton } from "./";

export class HeaderContainer extends BaseContainer {
  private hamburgerButton: HamburgerButton;
  private coinsContainer: CoinsContainer;
  private playerContainer: PlayerContainer;
  private shieldButton: ShieldButton;

  constructor() {
    super();

    this.hamburgerButton = new HamburgerButton();
    this.coinsContainer = new CoinsContainer();
    this.playerContainer = new PlayerContainer();
    this.shieldButton = new ShieldButton();

    this.addChild(this.hamburgerButton);
    this.addChild(this.coinsContainer);
    this.addChild(this.playerContainer);
    this.addChild(this.shieldButton);
  }

  onResize(screenWidth: number, _screenHeight: number) {
    this.position.set(screenWidth * 0.5, 32);

    this.hamburgerButton.position.set(-screenWidth * 0.5 + 32, 0);
    this.coinsContainer.position.set(0, 0);
    this.playerContainer.position.set(-120, 0);
    this.shieldButton.position.set(screenWidth * 0.5 - 32, 0);
  }
}
