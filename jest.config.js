/* eslint-disable prettier/prettier */
module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue',
      'ts'
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: [
      'node_modules',
    ],
    setupFilesAfterEnv: [
      '<rootDir>/src/setuptests.ts',
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1'
    },
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  };
