import { Application, Assets } from "pixi.js";

import { BgGraphics, CitySprite, Clouds, ControlsContainer, HeaderContainer } from "./components";

(async () => {
  const app = new Application();

  await app.init({
    backgroundColor: 0x2467aa,
    resizeTo: window,
  });

  document.body.appendChild(app.canvas);

  Assets.addBundle("controls", {
    button_cta: "./assets/images/ui/button_cta.png",
    button_dice_icon: "./assets/images/ui/button_dice_icon.png",
    button_left: "./assets/images/ui/button_left.png",
    button_right: "./assets/images/ui/button_right.png",
    home_icon: "./assets/images/ui/home_icon.png",
    news_icon: "./assets/images/ui/news_icon.png",
  });

  Assets.addBundle("header", {
    avatar: "./assets/images/ui/avatar.png",
    coin: "./assets/images/ui/coin.png",
    hamburger: "./assets/images/ui/hamburger_button.png",
    shield: "./assets/images/ui/shield.png",
  });

  Assets.addBundle("scene", {
    bg: "./assets/images/bg.png",
    city: "./assets/images/city.png",
    cloud1: "./assets/images/cloud.png",
    cloud2: "./assets/images/cloud2.png",
    cloud3: "./assets/images/cloud3.png",
  });

  await Assets.loadBundle("controls");
  await Assets.loadBundle("header");
  await Assets.loadBundle("scene");
  // await Assets.init({ manifest: "./manifest.json" });

  const bg = new BgGraphics();
  const city = new CitySprite();
  const controls = new ControlsContainer();
  const header = new HeaderContainer();
  const clouds1 = new Clouds(app.renderer.width, 0.25);
  clouds1.alpha = 0.5;
  const clouds2 = new Clouds(app.renderer.width, 0.5);

  app.stage.addChild(bg);
  app.stage.addChild(clouds1);
  app.stage.addChild(clouds2);
  app.stage.addChild(city);
  app.stage.addChild(controls);
  app.stage.addChild(header);

  function onResize(screenWidth: number, screenHeight: number, _resolution: number) {
    bg.resize(screenWidth, screenHeight);
    clouds1.resize(screenWidth, screenHeight);
    clouds2.resize(screenWidth, screenHeight);
    city.resize(screenWidth, screenHeight);
    controls.resize(screenWidth, screenHeight);
    header.resize(screenWidth, screenHeight);
  }

  app.ticker.add((time) => {
    clouds1.update(time);
    clouds2.update(time);
  });

  app.renderer.on("resize", onResize);

  onResize(app.renderer.width, app.renderer.height, app.renderer.resolution);
})();
