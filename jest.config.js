const esModules = ['lodash-es','lodash', ].join('|');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    "^.+\\.js$": "babel-jest",
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.(ts)?$": "ts-jest",
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
}
