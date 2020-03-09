import renderer from "./Renderer.js";
import Baba from "./Objects/Sprites/Baba.js";
import state from "./StateStack.js";
import { Direction } from "./Objects/Object.js";

async function main() {

    await renderer.waitUntilReady();

    const LEVEL_SIZE = 16;
    renderer.windowWidth = LEVEL_SIZE;
    renderer.windowHeight = LEVEL_SIZE;

    const baba = new Baba();

    function moveBaba(dir) {
        state.recordState(baba);
        state.endFrame();
        baba.move(dir);
    }

    function redraw() {
        renderer.clear("#333");
        renderer.drawObject(baba);
    }

    window.addEventListener("keydown", ev => {
        if (ev.key === "ArrowUp") {
            moveBaba(Direction.up);
        } else if (ev.key === "ArrowRight") {
            moveBaba(Direction.right);
        } else if (ev.key === "ArrowDown") {
            moveBaba(Direction.down);
        } else if (ev.key === "ArrowLeft") {
            moveBaba(Direction.left);
        }
        else if (ev.key === "z") {
            state.undo();
        }
        redraw();
    });

    redraw();
}

main();