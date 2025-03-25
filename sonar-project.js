const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || 'http://13.127.34.192:9000',
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectKey': 'YelpCamp',
      'sonar.projectName': 'YelpCamp Project',
      'sonar.projectVersion': '1.0.0',
      'sonar.sources': '.',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.tests': 'tests',
      'sonar.test.inclusions': 'tests/**/*.spec.js,tests/**/*.test.js',
      'sonar.exclusions': 'node_modules/**,coverage/**,dist/**'
    }
  },
  () => process.exit()
);
