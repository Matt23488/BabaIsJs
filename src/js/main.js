import renderer from "./Renderer.js";
import Baba from "./Objects/Sprites/Baba.js";
import state from "./StateStack.js";

async function main() {

    await renderer.waitUntilReady();

    const LEVEL_SIZE = 16;
    renderer.windowWidth = LEVEL_SIZE;
    renderer.windowHeight = LEVEL_SIZE;

    renderer.clear("#333");

    const baba = new Baba();
    // baba.x = 3;
    // baba.y = 4;

    renderer.drawObject(baba);

    function moveBaba(x, y) {
        state.recordState(baba);
        state.endFrame();
        baba.x += x;
        baba.y += y;
    }

    function redraw() {
        renderer.clear("#333");
        renderer.drawObject(baba);
    }

    window.addEventListener("keydown", ev => {
        if (ev.key === "ArrowUp") {
            moveBaba(0, -1);
        } else if (ev.key === "ArrowRight") {
            moveBaba(1, 0);
        } else if (ev.key === "ArrowDown") {
            moveBaba(0, 1);
        } else if (ev.key === "ArrowLeft") {
            moveBaba(-1, 0);
        }
        else if (ev.key === "z") {
            state.undo();
        }
        redraw();
    });
}

main();