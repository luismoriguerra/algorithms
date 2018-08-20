module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.js',
      'src/*.js',
      { pattern: 'src/**/*.test.js', ignore: true},
      { pattern: 'src/*.test.js', ignore: true},
    ],
    tests: [
      'src/**/*.test.js',
      'src/*.test.js'
    ],
    env: {
      type: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        "presets": ["env"]
      })
    },
    testFramework: 'jasmine'
  };
};