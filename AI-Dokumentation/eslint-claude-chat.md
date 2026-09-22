
**Nils**:
Why does ESLint document this config file online eslint.config.js but in this project it is a json file

**Claude**
Let me look at how ESLint is configured in this project.


Found files, ran a command, read .eslintrc.json
It's a versioning thing: your project uses ESLint's old config system, while the current docs describe the new one.

Your project has .eslintrc.json and "eslint": "^8" in package.json. Up to ESLint 8, the standard was the "eslintrc" format, which could be written as .eslintrc.json, .eslintrc.js, or .eslintrc.yml. create-next-app (which scaffolded this project with eslint-config-next 15.0.2) generated the JSON variant.
Since ESLint 9 (April 2024), the default is the new "flat config" system, and its file is always eslint.config.js (or .mjs/.ts). It must be JavaScript, because the config now imports plugins as modules and exports an array of config objects instead of using string names like "extends": "next/core-web-vitals". The online docs describe this current default, which is why they never mention a JSON file.
So both are legitimate — they're two different generations of the same tool. Your .eslintrc.json works fine with ESLint 8; it's deprecated in ESLint 9 and removed in ESLint 10. If you upgrade ESLint (or Next.js's lint tooling) later, you'd migrate this file to an eslint.config.mjs — newer Next.js versions scaffold exactly that. No action needed right now.