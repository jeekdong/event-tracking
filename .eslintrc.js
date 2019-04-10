module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
    'arrow-parens': 0, // allow paren-less arrow functions
    'generator-star-spacing': 0, // allow async-await
    'no-unused-vars': 'error', // disabled no ununsed var  `V1.1`
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // no use debugger in production
    'indent': [2, 2, { SwitchCase: 1 }], // 4 space for tab for perttier
    'space-before-function-paren': ['error', 'never'], // no space in function name for perttier
  }
}