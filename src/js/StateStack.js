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
        for (let state of this.#states) {
            state.obj.x = state.x;
            state.obj.y = state.y;
            state.obj.facing = state.facing;
        }
    }
}

export default new StateStack();