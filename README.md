# Creating-Develop-Pull-Request-Workflow

`name: CI`
`on:`
  `pull_request:`
    `branches: [Develop]`

`jobs:`
  `build:`
    `runs-on: ubuntu-latest`
    `steps:`
      `- uses: actions/checkout@v3`
      `- name: Use NodeJS`
        `uses: actions/setup-node@v1`
        `with:`
          `node-version: "18.x"`
      `- run: npm ci`
      `- run: npm run format:check`
      `- run: npm test -- --coverage`
        `env:`
          `CI: true"`
            
