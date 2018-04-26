module.exports = {
    "extends": "airbnb",
    
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "node": true,
        "es6": true
    },

    "rules": {
        "global-require": 0,
        "arrow-spacing": 0,
        "keyword-spacing": 0,
        "no-unused-vars": 0,
        "no-var": 0,
        "comma-dangle": [0, "never"],
        "comma-style": [0, "first", { "exceptions": { "ArrayExpression": true, "ObjectExpression": true } }],
        "indent": [2, 4],
        "prefer-arrow-callback": 0,
        "semi": [0, "never"],
        "space-before-blocks": 0,
        "space-before-function-paren": [0, "always"],
        "arrow-parens": [0, "as-needed"],
        "no-param-reassign": 0,
        "one-var": 0,
        "padded-blocks": 0,
        "eol-last": 0,
        "no-useless-constructor": 0,
        "class-methods-use-this": 0,
        "new-parens": 0,
        "no-useless-escape": [0, "never"],
        "no-nested-ternary": 0,
        "no-extra-boolean-cast": 0,
        "no-trailing-spaces": 0,
        "no-confusing-arrow": 0,
        "no-underscore-dangle": 0,
        "array-bracket-spacing": 0,
        "arrow-body-style": 0,
        "no-unused-expressions": 0,
        "object-shorthand": 0,


        "import/extensions": [0, "never"],
        "import/prefer-default-export": [0, "never"],
        "import/no-unresolved": [0, "never"],
        "import/no-dynamic-require": [0, "never"],
        "import/no-extraneous-dependencies": [0, "never"]
    }
};