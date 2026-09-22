
**Nils**:
What are good ways to split the ci-3.yaml Pipeline into multiple steps. Propose multiple ways how to do this. There should be a Linting Job and a Testing Job, and one at the end that simulates a deployment

**Claude**

Read `.github/workflows/ci-3.yaml` and `package.json`.

The current ci-3.yaml is a single `build` job that checks out, sets up Node, installs, lints, and builds. There is also an `npm run test` script (Jest) that isn't in the pipeline yet. Here are three sensible ways to split it into a Lint job, a Test job, and a simulated Deploy job.

## Option 1: Fully sequential chain (lint → test → deploy)

Each job runs on its own runner and only starts when the previous one succeeds, via `needs`:

```yaml
name: CI Pipeline

on:
  push:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - name: Lint Project
        run: npm run lint

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - name: Run Tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - name: Build Project
        run: npm run build
      - name: Simulate Deployment
        run: |
          echo "Deploying shared-shopping-list to production (simulation)..."
          echo "Deployment finished successfully!"
```

This mirrors a classic staged pipeline and is the easiest to reason about, but it's the slowest: test waits for lint even though they're independent, and every job repeats checkout + `npm ci` (the npm cache softens that).

## Option 2: Lint and test in parallel, deploy waits for both

Same jobs, but `test` drops its `needs: lint`, and deploy gates on both:

```yaml
  lint:
    # ... as above, no needs

  test:
    # ... as above, but no "needs: lint"

  deploy:
    runs-on: ubuntu-latest
    needs: [lint, test]
    # ... build + echo simulation as above
```

Lint and test start simultaneously on separate runners, so total pipeline time is roughly `max(lint, test) + deploy` instead of the sum. This is the standard shape for real-world CI: linting and testing don't depend on each other, so there's no reason to serialize them.

## Option 3: Build once, pass the artifact to the deploy job

If you want the "deployment" to feel realistic, build in one job and hand the output to deploy via artifacts, so deploy deploys exactly what was built rather than rebuilding:

```yaml
  build:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run build
      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: next-build
          path: .next/

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: next-build
          path: .next/
      - name: Simulate Deployment
        run: |
          echo "Deploying build artifact to server (simulation)..."
          ls -R .next | head -20
          echo "Deployment complete."
```

This is the most "real" pattern (build once, deploy that exact artifact, deploy job needs no Node setup at all), at the cost of a slightly longer workflow file. It can be combined with Option 2's parallel lint/test. Two optional refinements on top: attach `environment: production` to the deploy job so it shows up on GitHub's Deployments tab, and add a `pull_request` trigger that runs lint/test but skips deploy (`if: github.ref == 'refs/heads/main' && github.event_name == 'push'`).

**Recommendation:** Option 2 for a clean M324-style exercise (parallel lint + test, deploy with `needs: [lint, test]` that builds and echoes a simulated deployment), or Option 3 to demonstrate artifact hand-off between build and deploy. Note that in all variants `npm test` should be added to the pipeline — the current file only lints and builds.

**Nils**:
Please Document this chat in the Ai-Dokumentation Folder in a new file, all output should be in there

**Claude**

Created this file: `AI-Dokumentation/ci-pipeline-split-claude-chat.md`.
