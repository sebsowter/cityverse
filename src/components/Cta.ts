import { Container, Sprite } from "pixi.js";

import { CtaButton } from "./CtaButton";

export class Cta extends Container {
  constructor() {
    super();

    const bg = this.addChild(Sprite.from("bot"));
    bg.blendMode = "screen";
    bg.anchor.set(0.5, 1);
    bg.scale.set(0.7);
    bg.x = 4;

    const light = this.addChild(Sprite.from("light"));
    light.blendMode = "screen";
    light.anchor.set(0.5, 1);
    light.scale.set(0.7);

    const button = this.addChild(new CtaButton());
    button.y = -108;
  }
}
