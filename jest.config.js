// Jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

// Jest.config.js
const customConfig = {
  'clearMocks': true,
  'coverageDirectory': '.coverage',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
    '^@utils(.*)$': '<rootDir>/utils$1',
    '^@types(.*)$': '<rootDir>/types$1',
    '^@interfaces(.*)$': '<rootDir>/interfaces$1',
    '^@themes(.*)$': '<rootDir>/themes$1',
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
  },
  'setupFilesAfterEnv': ['./jest.setup.js'],
  'testEnvironment': 'jsdom'
}

module.exports = createJestConfig(customConfig)