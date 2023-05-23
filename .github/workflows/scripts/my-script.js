const { Octokit } = require("@octokit/action");

const commitSha = process.env.COMMIT_SHA;

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

console.log("owner=%s, repo=%s", owner, repo);

const checkSuiteUrl = util.format("/repos/%s/%s/commits/%s/check-suites", owner, repo, commitSha);

const { data } = await octokit.request("GET " + checkSuiteUrl);

console.log("data: %s", JSON.stringify(data));
