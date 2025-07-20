const { Schema, model, Types } = require("../config")

module.exports = model("product",  new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: Types.ObjectId,
    ref: "category"
  },

  createdBy: {
    type: Types.ObjectId,
    ref: "user"
  }
}, {
    timestamps: true
}))