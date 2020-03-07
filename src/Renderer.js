const CELL_SIZE = 20; // px

class Renderer
{
    #canvas = null;
    #context = null;

    constructor () {
        this.#canvas = document.getElementById("gameWindow");
        this.#context = this.#canvas.getContext("2d");
    }

    get windowWidth() {
        return this.#canvas.width;
    }
    set windowWidth(val) {
        this.#canvas.width = val * CELL_SIZE;
    }

    get windowHeight() {
        return this.#canvas.height;
    }
    set windowHeight(val) {
        this.#canvas.height = val * CELL_SIZE;
    }

    clear(color) {
        this.#context.fillStyle = color;
        this.#context.fillRect(0, 0, this.windowWidth, this.windowHeight);
    }
}

export default new Renderer();