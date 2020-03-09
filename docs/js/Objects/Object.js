export default class Object {
    /**
     * @type {number}
     */
    #x = 0;

    /**
     * @type {number}
     */
    #y = 0;

    /**
     * @type {number}
     */
    #textureX = 0;

    /**
     * @type {number}
     */
    #textureY = 0;

    /**
     * @type {Facing}
     */
    #facing = Facing.up;

    constructor(textureX, textureY) {
        this.#textureX = textureX;
        this.#textureY = textureY;
    }

    get x() { return this.#x; }
    set x(val) { this.#x = val; }

    get y() { return this.#y; }
    set y(val) { this.#y = val; }

    get textureX() { return this.#textureX; }
    get textureY() { return this.#textureY; }

    get facing() { return this.#facing; }
    set facing(val) { this.#facing = val; }
}

export class Facing {
    static #up = new Facing();
    static #right = new Facing();
    static #down = new Facing();
    static #left = new Facing();

    static get up() { return Facing.#up; }
    static get right() { return Facing.#right; }
    static get down() { return Facing.#down; }
    static get left() { return Facing.#left; }
}