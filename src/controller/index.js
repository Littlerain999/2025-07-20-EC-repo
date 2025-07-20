module.exports = {
    user: {
        signUp: require("./user/sign-up"),
        login: require("./user/login")
    },
    product: {
        create: require("./product/create"),
        getAll: require("./product/get-all"),
        getOne: require("./product/get-single"),
        update: require("./product/update"),
        delete: require("./product/delete")
    },
    category: {
        create: require("./category/create"),
        getAll: require("./category/get-all"),
        delete: require("./category/delete")
    }
}