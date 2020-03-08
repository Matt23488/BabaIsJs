const CELL_SIZE = 20; // px

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
     * @type {HTMLCanvasElement}
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

        // document.body.appendChild(this.#spritesheet);

        // this.#spritesheet = document.createElement("canvas");
        // this.#spritesheet.width = spritesheet.width;
        // this.#spritesheet.height = spritesheet.height;

        // this.#spritesheet.getContext("2d").drawImage(spritesheet, 0, 0);
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

    async drawObject(obj) {
        await this.#spritesheetLoader;
        this.#context.drawImage(
            this.#spritesheet,
            obj.textureX * CELL_SIZE,
            obj.textureY * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE,
            obj.x * CELL_SIZE,
            obj.y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );
    }
}

export default new Renderer();