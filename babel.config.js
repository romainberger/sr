module.exports = {
    presets: [
        "@babel/preset-react",
        ["@babel/preset-env", {
            targets: process.env.NODE_ENV === 'test' ? {
                node: 'current'
            } : {
                chrome: 58,
                ie: 10,
            },
        }],
    ],
    plugins: [
        // [ "@babel/plugin-proposal-decorators", { legacy: true } ],
        "@babel/plugin-proposal-class-properties",
        // "@babel/plugin-proposal-export-default-from",
        // "@babel/plugin-proposal-object-rest-spread",
        // "@babel/plugin-proposal-export-namespace-from",
        // "@babel/plugin-syntax-dynamic-import",
    ],
}
