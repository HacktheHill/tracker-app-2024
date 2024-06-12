# Track the Hack 2024
<hr/>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<hr/>

2024 edition of [Hack the Hill's](https://hackthehill.org/) flagship [hackathon](https://2024.hackthehill.com/) management platform, more commonly referred to as `Tracker App`.

WCAG Compliant and fully accessible in order to provide the best user experience for hackers, sponsors, and organizers alike.

Built with the latest stable technologies, and a strong commitment to the best developer experience through automation, tooling, and documentation.

📚 **[Documentation](https://github.com/HacktheHill/tracker-app-2024/wiki)**

🗓️ **[Project Board](https://github.com/orgs/HacktheHill/projects/6/views/1)**

💅 **[Figma](https://www.figma.com/design/Dzki9pxG4BkSfUcQMWDILd/Track-the-Hack-2024?t=rkrFTph33UIbpLnz-1)**

🌟 **[Design System]()**

This project uses [pnpm](https://pnpm.io/), which is essentially [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) on steroids. You can follow the instructions on the pnpm website to install it. Then do the following:

```bash
# Clone this repository
git clone git@github.com:HacktheHill/tracker-app-2024.git

# Navigate to repository
cd tracker-app-2024

# Install dependencies listed in package.json
pnpm i

# Run the app locally
pnpm dev
```

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages, with the following modifications to improve readability:

- The scope must be PascalCase.
- The subject must be Sentence case.

When you hit `enter` after doing `git commit`, it will trigger a [Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) managed by [Husky](https://typicode.github.io/husky/), which triggers a [Commitlint](https://commitlint.js.org/) command to verify that your commit message meets the specified guidelines. Any messages that do not follow the specification will be rejected with feedback locally.

In order to ease the process of learning the specification and writing compliant commit messages, we've configured [Commitizen](https://commitizen-tools.github.io/commitizen/) to guide you through the process of writing a commit message interactively.
You can run `pnpm commit` to use this tool. This will guarantee that your commit messages are formatted correctly.

With time, writing conventional commit messages will become second nature and you will no longer need to use Commitizen :)

- Each commit should be a single logical change. Don't make several logical changes in one commit. For example, if a patch fixes a bug and optimizes the performance of a feature, split it into two separate commits.
- Each commit should be able to stand on its own, and each commit should build on the previous one. This way, if a commit introduces a bug, it should be easy to identify and revert.
- Each commit should be deployable and not break the build, tests, or functionality.
- If you're not sure if a commit should be split, it's better to split it if each commit is deployable and doesn't break the build, tests, or functionality.
- If you fixed changes in a past commit, look to use `git commit --amend` to add changes to the previous commit rather than creating a new one; thus keeping the commit history clean and concise. Your local branch will then be divergent from the remote for the amended commit(s), so GitHub won't let you push. Simply force push to overwrite your old branch :)

The use of [Lazygit](https://github.com/jesseduffield/lazygit) is highly encouraged, as it provides a visual interface to manage your commits, branches, staging areas, stashes, and much more. It is also significantly easier to resolve merge conflicts, cherry-pick commits between branches, squash them, amend a few commits back, checkout a specific commit, stage in hunks, etc. You will be able to unlock the full power of Git without memorizing all the commands.

We currently follow a [Trunk-based development](https://tilburgsciencehub.com/topics/automation/version-control/advanced-git/git-branching-strategies/) with a no-merge, no-squash, rebase-only workflow as the project is in its early stages. This essentially means you should always create a branch off `main` in the following format:
`yourname/<conventional-spec>/<issue-number>-<issue-name-kebab-cased>`. For example, `johndoe/feat/1-add-login-page`. Do not do `git merge`; instead always pull the latest from `main`, check back out to your branch, then do `git rebase main`.
This keeps a clean, linear history that is free of merge commits and easy to debug.

This is subject to change as the project and team scales. Our goal is to always keep branches as short-lived as possible, thus keeping cycle times to a minimum and reducing bugs.

Sometimes the issue names are long, in which case you can create them directly by clicking on an issue, and it'll autofill the issue number and name for you in kebab-case.

Always simple rebase your branch onto main before creating a pull request. This ensures that your branch is up to date with the latest changes in the main branch. Branch and PR rules are set up for the repo just in case as a guardrail.

Please try to close 1 issue per pull request, and always use the exact same PR title as the issue name.

Ensure that the issue is linked to your PR, and is part of a milestone. However, do not add it to the project board, as it shows up as a card and causes visual pollution. We can easily just see your linked PR from the closed issue if we need to find it.