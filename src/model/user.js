const { Schema, model, client, admin, models } = require("../config")

module.exports = model("user", new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
                if (await models.user.findOne({ email: value})) return false
            },
            message: "Email already in use"
        }
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: [client, admin],
        default: client
    }
}, {
    timestamps: true
}))