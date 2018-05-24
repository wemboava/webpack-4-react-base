module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': 'webpack'
    },
    rules: {
        "global-require": 0,
        "arrow-spacing": 2,
        "keyword-spacing": 2,
        "no-unused-vars": 1,
        "no-var": 2,
        "comma-dangle": [2, "never"],
        "comma-style": [2, "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }],
        "indent": [2, 4, {"SwitchCase": 1}],
        "prefer-arrow-callback": 2,
        "semi": [2, "never"],
        "space-before-blocks": 0,
        "space-before-function-paren": [0, "always"],
        "arrow-parens": [2, "as-needed"],
        "one-var": 0,
        "padded-blocks": 0,
        "eol-last": 0,
        "no-useless-constructor": 0,
        "class-methods-use-this": 0,
        "new-parens": 0,
        "no-nested-ternary": 0,
        "no-param-reassign": 0,
        "no-unused-vars": 0,
        "linebreak-style": 0,
        "default-case": 0,
        
        "import/prefer-default-export": [0, "never"],
        "import/no-unresolved": [0, "never"],
        "import/no-dynamic-require": [0, "never"],
    
        "import/extensions": [0, "never"],
        // allow optionalDependencies
        "import/no-extraneous-dependencies": [0, "never"],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}