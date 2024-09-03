import { Container } from "pixi.js";

import { Coins, Hamburger, Player, Shield } from ".";

export class Header extends Container {
  private coins: Coins;
  private hamburger: Hamburger;
  private player: Player;
  private shield: Shield;

  constructor() {
    super();

    const y = 40;

    this.coins = new Coins();
    this.coins.y = y;
    this.hamburger = new Hamburger();
    this.hamburger.y = y;
    this.player = new Player();
    this.player.y = y;
    this.shield = new Shield();
    this.shield.y = y;

    this.addChild(this.coins);
    this.addChild(this.shield);
    this.addChild(this.player);
    this.addChild(this.hamburger);
  }

  resize(screenWidth: number, _screenHeight: number) {
    this.x = screenWidth * 0.5;
    this.hamburger.x = -screenWidth * 0.5 + 40;
    this.player.x = -screenWidth * 0.5 + 88;
    this.shield.x = screenWidth * 0.5 - 40;
  }
}
