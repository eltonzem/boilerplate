module.exports = {
  testEnvironment: 'jsdom', //diz o tipo de ambiente que queremos como é o navegador usamos o jsdom
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignora certas pastas que não queremos que ele passa como next e node
  collectCoverage: true, //quando eu rodar o jest ele faz a cobertura e fazo teste
  collectCoverageFrom: ['src/**/*.ts(x)'], //pede para pegar todos arquivos tanto js como jsx
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], //pede para carregar as configurações antes de rodar
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
};
