/**
 * Created by Yurek on 2016/12/16.
 */
export default function bindFunctions(functions) {
    functions.forEach(f => this[f] = this[f].bind(this));
}