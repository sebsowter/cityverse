import { FillGradient, Graphics } from "pixi.js";

const colorStops = [0x2466aa, 0x91b3dd, 0x2466aa];

function gradient(height: number) {
  const gradientFill = new FillGradient(0, 0, 0, height);

  colorStops.forEach((number, index) => {
    gradientFill.addColorStop(index / colorStops.length, number);
  });

  return gradientFill;
}

export class Bg extends Graphics {
  resize(screenWidth: number, screenHeight: number) {
    this.clear().rect(0, 0, screenWidth, screenHeight).fill(gradient(screenHeight));
  }
}
