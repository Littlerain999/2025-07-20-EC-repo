
module.exports = {
    user: {
        signUp: require("./user/signUp"),
        login: require("./user/login")
    },

    product: {
        create: require("./product/create")
    },

    category: {
        create: require("./category/create")
    }
}