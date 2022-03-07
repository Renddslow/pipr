# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

## [1.2.0] - 2022-03-07

### Fixed

- Corrected types
- Corrected files included in the bundle

### Security

- \[dependabot] Bumped ini
- \[dependabot] Bumped hosted-git-info
- \[dependabot] Bumped lodash
- \[dependabot] Bumped normalize
- \[dependabot] Bumped glob-parent
- \[dependabot] Bumped path-parse
- \[dependabot] Bumped trim-off-newlines

---

## [1.1.0] 2022-03-07

### Changed

- Changed package to ESM

---

## [1.0.0] - 2020-10-19

### Added

- `pipr` now exposes an `eject` method that receives the piped results of the previous function, and if it returns true, will end the pipe, returning the results of the function prior to the `eject`.

### Fixed

- Fixed an issue where spreadable arguments would not pass correctly to the next function.
