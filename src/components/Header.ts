import { Container } from "pixi.js";

import { Coins, Hamburger, Player, Shield } from ".";

export class Header extends Container {
  private coins: Coins;
  private hamburger: Hamburger;
  private player: Player;
  private shield: Shield;

  constructor() {
    super();

    this.coins = new Coins();
    this.hamburger = new Hamburger();
    this.player = new Player();
    this.shield = new Shield();

    this.addChild(this.coins);
    this.addChild(this.shield);
    this.addChild(this.player);
    this.addChild(this.hamburger);
  }

  resize(screenWidth: number, _screenHeight: number) {
    this.position.set(screenWidth * 0.5, 0);
    this.hamburger.position.set(-screenWidth * 0.5 + 40, 40);
    this.coins.position.set(0, 40);
    this.player.position.set(-screenWidth * 0.5 + 88, 40);
    this.shield.position.set(screenWidth * 0.5 - 40, 40);
  }
}
