# Contributing

Thanks for your interest in improving the PropFlow website! This is primarily an internal repo, but we welcome external pull requests for bug fixes, accessibility improvements, and typo fixes.

## Code of conduct

Be kind. Assume good intent. We're building this together.

## Local setup

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:3000
```

Before opening a PR, please run:

```bash
npm run validate   # type-check + lint + format check
```

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(hero): add live status pill to footer
fix(blog): handle missing frontmatter gracefully
docs(readme): document env variables
chore(deps): bump next to 16.2.10
```

## File conventions

- **Pages** go under `src/app/<route>/page.tsx` (App Router).
- **Sections** (re-usable homepage blocks) go under `src/components/sections/`.
- **UI primitives** go under `src/components/ui/`.
- **Shared utilities** go under `src/lib/`.
- **MDX blog posts** go under `content/blog/<slug>.mdx`.

## Pull-request checklist

- [ ] `npm run validate` passes locally
- [ ] Screenshots / screen recordings included for visual changes
- [ ] Tested on mobile viewport (≤ 375px) and dark mode
- [ ] Accessibility considered (keyboard nav, focus states, contrast)
- [ ] No new dependencies unless explicitly justified in the PR description
- [ ] Any new env variable documented in `README.md`

## Reporting bugs

Open a GitHub issue with:

- What you expected vs what happened
- Steps to reproduce
- Browser, OS, viewport
- A reduced test case if possible

## License

By contributing, you agree that your contributions will be licensed under the project's proprietary license (see `LICENSE`).
