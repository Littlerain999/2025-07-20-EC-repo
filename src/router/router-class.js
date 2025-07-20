module.exports = class {
    constructor(path) {
        this.path = path;
        this.router = require(`.${path}`)
    }
}