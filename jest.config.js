module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};