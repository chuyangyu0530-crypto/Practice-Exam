module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  preset: 'ts-jest',
  maxWorkers: 1,
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(ts|tsx|js)$': ['ts-jest', {
      useESM: true,
    }],
  },
};