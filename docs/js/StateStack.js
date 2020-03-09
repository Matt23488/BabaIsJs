class StateStack {
    /**
     * @type {StateFrame[]}
     */
    #stack = [];

    /**
     * @type {StateFrame}
     */
    #currentFrame = new StateFrame();

    clear() {
        this.#stack = [];
    }

    // TODO: Perhaps check if nothing changed
    endFrame() {
        this.#stack.push(this.#currentFrame);
        this.#currentFrame = new StateFrame();
    }

    recordState(obj) {
        this.#currentFrame.addState({
            obj: obj,
            x: obj.x,
            y: obj.y,
            facing: obj.facing
        });
    }

    undo() {
        if (this.#stack.length === 0) return;

        const previous = this.#stack.pop();
        previous.reverseStates();
    }
}

class StateFrame {
    /**
     * @type {[]}
     */
    #states = [];

    addState(state) {
        this.#states.push(state);
    }

    reverseStates() {
        for (let change of this.#states) {
            change.obj.x = change.x;
            change.obj.y = change.y;
            change.obj.facing = change.facing;
        }
    }
}

export default new StateStack();