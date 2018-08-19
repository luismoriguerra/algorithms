module.exports = () => {
  return {
    files: [
      'src/**/*.js',
      { pattern: 'src/**/*.test.js', ignore: true}
    ],
    tests: [
      'src/**/*.test.js'
    ],
    env: {
      type: 'node',
      params: {
        runner: `-r ${require.resolve('esm')}`
      }
    },
    testFramework: 'jasmine'
  };
};