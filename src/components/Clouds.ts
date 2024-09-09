import { Container, Ticker } from "pixi.js";

import { Cloud } from ".";

function randomTexture() {
  const clouds = ["cloud1", "cloud2", "cloud3"];

  return clouds[Math.floor(Math.random() * clouds.length)];
}

function randomOffsetY() {
  return -128 + Math.random() * 256;
}

function randomOffsetSpeed() {
  return -0.1 + Math.random() * 0.2;
}

export class Clouds extends Container {
  private screenWidth: number;
  private speed: number;
  private clouds: Cloud[];

  constructor(screenWidth = 1024, speed: number) {
    super();

    this.clouds = [];
    this.speed = speed;
    this.screenWidth = screenWidth;

    this.createCloud(this.screenWidth * -0.5);
    this.createCloud(this.screenWidth * -0.25);
    this.createCloud(0);
    this.createCloud(this.screenWidth * 0.25);
    this.createCloud(this.screenWidth * 0.5);
  }

  createCloud(x?: number) {
    const cloud = new Cloud(randomTexture(), this.speed + randomOffsetSpeed());

    cloud.position.set(x ?? (this.screenWidth + cloud.width) * 0.5, randomOffsetY());

    this.addChild(cloud);

    this.clouds.push(cloud);
  }

  resize(screenWidth: number, screenHeight: number) {
    this.screenWidth = screenWidth;
    this.position.set(screenWidth * 0.5, screenHeight * 0.25);
  }

  update(time: Ticker) {
    this.clouds.forEach((cloud) => {
      cloud.x -= cloud.speed * time.deltaTime;

      if (cloud.x < -(this.screenWidth + cloud.width) * 0.5) {
        cloud.x = (this.screenWidth + cloud.width) * 0.5;
      }
    });
  }
}
