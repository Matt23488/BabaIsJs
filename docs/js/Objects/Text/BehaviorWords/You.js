import TextBase from "../TextBase.js";
import { Direction } from "../../Object.js";

const typesThatAreYou = [];
let nextIndex = 0;
export default class YouWord extends TextBase {
    #index = -1;

    constructor() {
        super();

        this.#index = nextIndex++;
    }

    get word() { return "YOU"; }

    // TODO: Pull into a base class
    // TODO: And it won't work as-is with modifiers like FACING and NOT
    // TODO: Also look into better system for indexing
    applyBehavior(type) {
        typesThatAreYou[this.#index] = type;
    }

    unapplyBehavior() {
        typesThatAreYou[this.#index] = null;
    }
}

function move(dir) {
    for (let type of typesThatAreYou) {
        if (!type) continue;

        // TODO: Find all objects of this type and request them to move
        // I need a level class or something to handle that and manage the state stack, etc
        console.log(type);
    }
}

window.addEventListener("keydown", ev => {
    if (ev.key === "w" || ev.key === "W" || ev.key === "ArrowUp") {
        move(Direction.up);
    } else if (ev.key === "a" || ev.key === "A" || ev.key === "ArrowLeft") {
        move(Direction.left);
    } else if (ev.key === "s" || ev.key === "S" || ev.key === "ArrowDown") {
        move(Direction.down);
    } else if (ev.key === "d" || ev.key === "D" || ev.key === "ArrowRight") {
        move(Direction.right);
    }
});