module.exports = {
    plugins: ['wdio', 'mocha'],
  
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      mocha: true,
      node: true
    },
    extends: [
      'eslint:recommended'
    ],
    globals: {
      browser: true,
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      '$': true,
      expect: true,
      assert: true,
      'obj': true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      'indent': ['error', 4],
      'semi': ['error', 'always'],
      'no-console': ["warn"],
      'no-unused-vars':'warn',
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-identical-title': 'error',
      'mocha/no-global-tests': 'error',
      'mocha/no-skipped-tests': 'warn'
    }
  }
  