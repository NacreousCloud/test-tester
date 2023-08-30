/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|less|scss|otf)$": "babel-jest",
  },
};
