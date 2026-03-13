module.exports = {
  testEnvironment: 'node', // or 'jsdom' for browser stuff
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};