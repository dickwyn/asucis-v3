# Contributing to v3

By default write access to this repository is only granted to administrators. Branch protection policies are also enforced across all branches within the repository. To create new features or fix opened issues, please create a fork of this repository and make changes on your own fork before creating a pull request back to the repo.

## Commit messages

Format commit messaged with these conventions

- **feat** (new feature)
- **fix** (bug fix)
- **docs** (changes to documentation)
- **style** (formatting, missing semi colons, etc; no code change)
- **refactor** (refactoring production code)
- **test** (adding missing tests, refactoring tests; no production code change)
- **chore** (updating grunt tasks etc; no production code change)

_conventions adapted from [karma](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)_

## Pull requests

Include the issue # in your pull request (PR) title alongisde a clear and concise summary of the changes made. Include additional information in the PR description.

Example PR title

```
feat(#9): Integrated events API with events page
```

# Linting

The project has been configured with eslint and prettier rules to ensure consistent code quality throughout the repository. The eslint config follows airbnb style which you can read up on [here](https://github.com/airbnb/javascript).

Finally, pre-commit hooks are another line of defence to prevent _bad code_ from being committed to the repository.
