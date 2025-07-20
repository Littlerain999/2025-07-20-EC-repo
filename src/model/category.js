const { Schema, model } = require("../config")

module.exports = model("category", new Schema({
  title: {
    type: String,
    required: true,
  }
}))