import { Container } from "pixi.js";

import { Coins, Crown, Hamburger, Player, Shield } from ".";

export class Header extends Container {
  private coins: Coins;
  private crown: Crown;
  private hamburger: Hamburger;
  private player: Player;
  private shield: Shield;

  constructor() {
    super();

    this.coins = new Coins();
    this.crown = new Crown();
    this.hamburger = new Hamburger();
    this.player = new Player();
    this.shield = new Shield();

    this.addChild(this.player);
    this.addChild(this.crown);
    this.addChild(this.coins);
    this.addChild(this.shield);
    this.addChild(this.hamburger);
  }

  resize(screenWidth: number, _screenHeight: number) {
    const isLarge = screenWidth > 480;

    this.position.set(screenWidth * 0.5, 0);
    this.hamburger.position.set(-screenWidth * 0.5 + 40, 40);
    this.coins.position.set(0, isLarge ? 40 : 96);
    this.player.position.set(isLarge ? -120 : -52, 40);
    this.crown.position.set(isLarge ? 120 : 52, 40);
    this.shield.position.set(screenWidth * 0.5 - 40, 40);
  }
}
