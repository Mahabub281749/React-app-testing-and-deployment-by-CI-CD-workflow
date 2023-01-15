module.exports = {
  branches: "master",
  repositoryUrl:
    "https://github.com/Mahabub281749/React-app-testing-and-deployment-by-CI-CD-workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" }
        ]
      }
    ]
  ]
};
