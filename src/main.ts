import { Application, Assets } from "pixi.js";

import { BaseContainer, BgSprite, CitySprite, ControlsContainer, HeaderContainer } from "./components";

(async () => {
  const app = new Application();

  const components: BaseContainer[] = [];

  await app.init({
    width: 640,
    height: 360,
    backgroundColor: 0x2467aa,
    resolution: 1,
  });

  document.body.appendChild(app.canvas);

  console.log("---", window.devicePixelRatio);

  Assets.addBundle("ui", {
    avatar: "./assets/images/ui/avatar.png",
    bg: "./assets/images/bg.png",
    button_cta: "./assets/images/ui/button_cta.png",
    button_dice_icon: "./assets/images/ui/button_dice_icon.png",
    button_left: "./assets/images/ui/button_left.png",
    button_right: "./assets/images/ui/button_right.png",
    city: "./assets/images/city.png",
    coin: "./assets/images/ui/coin.png",
    hamburger_button: "./assets/images/ui/top/hamburger_button.png",
    home_icon: "./assets/images/ui/home_icon.png",
    news_icon: "./assets/images/ui/news_icon.png",
    shield: "./assets/images/ui/shield.png",
  });

  const assets = await Assets.loadBundle("ui");

  const bgSprite = new BgSprite();
  const city = new CitySprite();
  const controls = new ControlsContainer();
  const header = new HeaderContainer();

  app.stage.addChild(bgSprite);
  app.stage.addChild(city);
  app.stage.addChild(controls);
  app.stage.addChild(header);

  const onResize = () => {
    if (app) {
      app.renderer.resize(window.innerWidth, window.innerHeight);
      bgSprite.onResize(window.innerWidth, window.innerHeight);
      city.onResize(window.innerWidth, window.innerHeight);
      controls.onResize(window.innerWidth, window.innerHeight);
      header.onResize(window.innerWidth, window.innerHeight);
    }
  };

  window.addEventListener("resize", onResize);

  onResize();
})();
