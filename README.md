# Hack the Hill Tracker App 2024

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

2024 edition of Hack the Hill's flagship hackathon management platform.
WCAG Compliant and fully accessible in order to provide the best user experience for hackers, sponsors, and organizers alike.
Built with the latest stable technologies, and a strong commitment to the best developer experience through automation, tooling, and documentation.

📚 **[Hack the Hill Tracker App 2024 Documentation](https://github.com/HacktheHill/tracker-app-2024/wiki)**
🗓️ **[Hack the Hill Tracker App 2024 GitHub Project Board](https://github.com/orgs/HacktheHill/projects/6/views/1)**

💅 **[Hack the Hill Tracker App 2024 Figma]()**
🌟 **[Hack the Hill Tracker App 2024 Design System (Storybook)]()**

Most projects use [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) for package management.
This project uses [pnpm](https://pnpm.io/), which is essentially npm on steroids. You can follow the instructions on the pnpm website to install it.

```bash
git clone git@github.com:HacktheHill/tracker-app-2024.git
pnpm i
pnpm dev
```

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages, with the following modifications:

- The scope must be PascalCase.
- The subject must be Sentence case.

When you hit enter after doing a git commit, it will trigger a git hook managed by `husky`, which triggers a `commitlint` command to verify that your commit message meets the guidelines. Any messages that do not follow the specification will be rejected.

In order to ease the process of writing commit messages, we've configured `commitizen` to guide you through the process of writing a commit message interactively.
You can run `pnpm commit` to use this tool. This will guarantee that your commit messages are formatted correctly.

With time, writing commit messages will become second nature and you will no longer need to use `commitizen`.

We currently follow a [Trunk-based development](https://tilburgsciencehub.com/topics/automation/version-control/advanced-git/git-branching-strategies/) workflow as the project is in its early stages. This essentially means you always create a branch off `main` in the following format:
`yourname/<conventional-spec>/<issue-number>-<issue-name-kebab-cased>`. For example, `johndoe/feat/1-add-login-page`.

Sometimes the issue names are long, in which case you can create them directly by clicking on an issue, and it'll autofill the issue number and name for you in kebab-case.

Always simple rebase your branch onto main before creating a pull request. This ensures that your branch is up to date with the latest changes in the main branch.

Please try to close 1 issue per pull request, and always use the exact issue name as the PR title.
