module.exports = {
  branches: "master",
  repositoryUrl:
    "https://github.com/Mahabub281749/CI-CD-workflow-to-Automate-testing-and-deployment-of-a-React-App",
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
