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
     * @type {Direction}
     */
    #facing = Direction.up;

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

    /**
     * Moves the object and sets the new facing direction.
     * @param {Direction} dir 
     */
    move(dir) {
        this.x += dir.xOffset;
        this.y += dir.yOffset;
        this.facing = dir;
    }
}

export class Direction {
    static #up = new Direction(0, -1);
    static #right = new Direction(1, 0);
    static #down = new Direction(0, 1);
    static #left = new Direction(-1, 0);

    static get up() { return Direction.#up; }
    static get right() { return Direction.#right; }
    static get down() { return Direction.#down; }
    static get left() { return Direction.#left; }

    /**
     * @type {number}
     */
    #xOffset = 0;

    /**
     * @type {number}
     */
    #yOffset = 0;

    constructor(xOffset, yOffset) {
        this.#xOffset = xOffset;
        this.#yOffset = yOffset;
    }

    get xOffset() { return this.#xOffset; }
    get yOffset() { return this.#yOffset; }
}