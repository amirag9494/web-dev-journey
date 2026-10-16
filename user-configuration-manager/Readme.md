# User Configuration Manager

A lightweight, robust Python module designed to manage user-specific runtime preferences (themes, notifications, audio levels, etc.) backed by standard dictionary manipulations, key normalization, and state formatting.

## Features

- **Key-Value Normalization**: Automatic case-folding (`lowercase`) on insertion, lookup, and updates to guarantee idempotent key lookups.
- **Conflict Prevention**: Built-in guard clauses prevent accidental overwrites or modifying non-existent records.
- **State Serialization**: Pretty-print helper (`view_settings`) formatting state into capitalized, line-separated outputs.
- **Pure Python**: Zero third-party dependencies.

---

## File Structure

```text
├── main.py        # Core Python functions & test cases
├── index.html     # Interactive browser interface
├── style.css      # Modern dark-mode UI stylesheet
└── README.md      # Documentation