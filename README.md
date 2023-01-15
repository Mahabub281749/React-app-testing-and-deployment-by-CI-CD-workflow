# React-app-testing-and-deployment-by-CI-CD-workflow

<img src="Workflow.png">

## Workflow

<img src="Workflow2.png">

- Install Dependencies
- Check code formatting
- Run Automated Test
- Upload Code Coverage as an Artifact
- Cache Dependencies

## Develop

<img src="Develop.png">

- Install Dependencies
- Check code formatting
- Run Automated Test
- Upload Code Coverage as an Artifact
- Build Projects
- Upload Build as an Artifact
- Deploy to Staging server
- Cache Dependencies

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

### Creating Develop Merge Request Workflow

```
push:
    branches: [Develop]

- name: Build Project
    if: github.event_name == 'push'
    run: npm run build
- name: Deploy to staging
    if: github.event_name == 'push' && github.ref == 'refs/heads/Develop'
    run: npx surge --project ./build --domain harsh-shop.surge.sh
    env:
        SURGE_LOGIN: ${{ secrets.SURGE_LOGIN }}
        SURGE_TOKEN: ${{ secrets.SURGE_TOKEN }}

```

### SURGE LOGIN

`surge whoami`

### SURGE TOEKN

`surge token`

### Cache

```
- name: Cache node-modules
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

```

### Uploading Artifacts

```
- name: Upload Test Coverage
        uses: actions/upload-artifact@v3
        with:
          name: code-coverage
          path: coverage

- name: Upload Build Folder
        if: github.event_name == 'push'
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: build
- uses: actions/download-artifact@v3

```

### Install Semantic Release in Project

`npm install --save-dev semantic-release`

### Configure Release.config.js

```
module.exports = {
branches: "master",
repositoryUrl: "https://github.com/alialaa/react-app",
plugins: [
"@semantic-release/commit-analyzer", "@semantic-release/release-notes-generator",
"@semantic-release/github"
]
}
```
