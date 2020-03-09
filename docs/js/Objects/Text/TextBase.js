import Object from "../Object.js";

export default class TextBase extends Object {
    get word() { throw new Error("Must override `get word()`"); }
}