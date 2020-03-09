import TextBase from "../TextBase.js";

export default class BabaWord extends TextBase {
    constructor() {
        super(0, 1);
    }

    get word() { return "BABA"; }
}