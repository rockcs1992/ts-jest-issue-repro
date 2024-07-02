/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
      "ts-test": {
        tsConfig: "tsconfig.test.json",
      },
      
    },
    transform: {
      '^.+\\.ts?$': [
        'ts-jest',
      ],
    }
  };