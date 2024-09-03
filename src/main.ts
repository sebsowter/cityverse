import { Application, Assets } from "pixi.js";

import { Bg, City, Clouds, Controls, Header } from "./components";

(async () => {
  const app = new Application();

  await app.init({
    backgroundColor: 0x2467aa,
    resizeTo: window,
  });

  document.body.appendChild(app.canvas);

  await Assets.init({ manifest: "./manifest.json" });
  await Assets.loadBundle("ui");
  await Assets.loadBundle("scene");

  const bg = new Bg();
  const city = new City();
  const controls = new Controls();
  const header = new Header();
  const clouds1 = new Clouds(app.renderer.width, 0.25);
  clouds1.alpha = 0.5;
  const clouds2 = new Clouds(app.renderer.width, 0.5);

  app.stage.addChild(bg);
  app.stage.addChild(clouds1);
  app.stage.addChild(clouds2);
  app.stage.addChild(city);
  app.stage.addChild(controls);
  app.stage.addChild(header);

  app.ticker.add((time) => {
    clouds1.update(time);
    clouds2.update(time);
  });

  function onResize(screenWidth: number, screenHeight: number, _resolution: number) {
    bg.resize(screenWidth, screenHeight);
    clouds1.resize(screenWidth, screenHeight);
    clouds2.resize(screenWidth, screenHeight);
    city.resize(screenWidth, screenHeight);
    controls.resize(screenWidth, screenHeight);
    header.resize(screenWidth, screenHeight);
  }

  app.renderer.on("resize", onResize);

  onResize(app.renderer.width, app.renderer.height, app.renderer.resolution);
})();
