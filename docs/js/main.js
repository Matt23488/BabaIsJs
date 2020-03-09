import renderer from "./Renderer.js";
import Baba from "./Objects/Sprites/Baba.js";
import state from "./StateStack.js";
import { Direction } from "./Objects/Object.js";
import TextBase from "./Objects/Text/TextBase.js";
import BabaWord from "./Objects/Text/ObjectWords/Baba.js";
import IsWord from "./Objects/Text/Is.js";
import YouWord from "./Objects/Text/BehaviorWords/You.js";

async function main() {

    await renderer.waitUntilReady();

    const LEVEL_SIZE = 16;
    renderer.windowWidth = LEVEL_SIZE;
    renderer.windowHeight = LEVEL_SIZE;

    const baba = new Baba();
    const babaWord = new BabaWord();

    function moveBaba(dir) {
        state.recordState(baba);
        state.endFrame();
        baba.move(dir);
    }

    function redraw() {
        renderer.clear("#333");
        renderer.drawObject(baba);
        renderer.drawObject(babaWord);
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
    });

    let previousTimestamp = 0;
    let deltaTime = 0;
    function loop(timestamp) {
        deltaTime = timestamp - previousTimestamp;
        
        redraw();
        
        previousTimestamp = timestamp;
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}

main();

// let babaYou = new YouWord();
// let isYou = new YouWord();
// let youYou = new YouWord();

// let babaFlag = false;
// let isFlag = false;
// let youFlag = false;

// window.addEventListener("keydown", ev => {
//     if (ev.key === "b") {
//         babaFlag = !babaFlag;
//         if (babaFlag) babaYou.applyBehavior(BabaWord);
//         else babaYou.unapplyBehavior();
//         console.log(`Baba: ${babaFlag}`);
//     } else if (ev.key === "i") {
//         isFlag = !isFlag;
//         if (isFlag) isYou.applyBehavior(IsWord);
//         else isYou.unapplyBehavior();
//         console.log(`Is: ${isFlag}`);
//     } else if (ev.key === "y") {
//         youFlag = !youFlag;
//         if (youFlag) youYou.applyBehavior(YouWord);
//         else youYou.unapplyBehavior();
//         console.log(`You: ${youFlag}`);
//     }
// });