import renderer from "./Renderer.js";
import Baba from "./Objects/Sprites/Baba.js";

async function main() {

    const LEVEL_SIZE = 16;
    renderer.windowWidth = LEVEL_SIZE;
    renderer.windowHeight = LEVEL_SIZE;

    renderer.clear("#333");

    const baba = new Baba();
    baba.x = 3;
    baba.y = 4;

    await renderer.drawObject(baba);

}

main();