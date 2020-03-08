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
}