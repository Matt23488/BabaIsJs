const CELL_SIZE = 40; // px
const SPRITE_SIZE = 20;

class Renderer
{
    /**
     * @type {HTMLCanvasElement}
     */
    #canvas = null;

    /**
     * @type {CanvasRenderingContext2D}
     */
    #context = null;

    /**
     * @type {HTMLImageElement}
     */
    #spritesheet = null;

    /**
     * @type {Promise}
     */
    #spritesheetLoader = null;

    constructor () {
        this.#canvas = document.getElementById("gameWindow");
        this.#context = this.#canvas.getContext("2d");

        this.#spritesheet = document.createElement("img");
        this.#spritesheet.src = "images/spritesheet.png";

        this.#spritesheetLoader = new Promise(resolve => {
            this.#spritesheet.addEventListener("load", ev => {
                resolve();
            });
        });
    }

    async waitUntilReady() {
        await this.#spritesheetLoader;
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

    drawObject(obj) {
        this.#context.drawImage(
            this.#spritesheet,
            obj.textureX * SPRITE_SIZE,
            obj.textureY * SPRITE_SIZE,
            SPRITE_SIZE,
            SPRITE_SIZE,
            obj.x * CELL_SIZE,
            obj.y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );
    }
}

export default new Renderer();