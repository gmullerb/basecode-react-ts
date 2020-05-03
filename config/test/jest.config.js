// Copyright (c) 2020 Gonzalo Müller Bravo.
module.exports = {
  rootDir: '../..',
  roots: [ 'src/main' ],
  transform: { '^.+\\.[tj]sx?$': 'ts-jest' },
  testRegex: '/___tests/.*\\.test\\.jsx?$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/config/test/cssMapper.js',
    '\\.svg$': '<rootDir>/config/test/svgMapper.js'
  },
  setupFiles: [ '<rootDir>/config/test/setupEnvironment.js' ],
  setupFilesAfterEnv: [ 'jest-enzyme' ],
  testEnvironment: 'enzyme',
  globals: {
    'ts-jest': {
      tsConfig: 'config/test/tsconfig.jest.json',
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/main/**/!(*.d).+(ts|tsx)'
  ],
  coverageDirectory: 'build/reports/coverage',
  coverageReporters: [
    'lcov',
    'text',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 50, // 85 is better, 50 just for demo
      functions: 25, // 50 is better, 25 just for demo
      lines: 0,
      statements: 25
    }
  }
}
