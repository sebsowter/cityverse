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

  resize(screenWidth: number, screenHeight: number) {
    const isLarge = screenWidth > 480;
    const y = screenHeight > 400 ? 40 : 28;

    this.x = screenWidth * 0.5;
    this.coins.y = y;
    this.hamburger.position.set(-screenWidth * 0.5 + (isLarge ? 40 : screenWidth * 0.07), y);
    this.player.position.set(-screenWidth * 0.5 + (isLarge ? 88 : screenWidth * 0.07 + 40), y);
    this.shield.position.set(screenWidth * 0.5 - (isLarge ? 40 : screenWidth * 0.07), y);
  }
}
