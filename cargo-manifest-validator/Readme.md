# 🚢 Cargo Manifest Validator

A robust, interactive web utility built with **Vanilla JavaScript (ES6+)**, **HTML5**, and **CSS3** that normalizes transport cargo units and rigorously validates shipping manifests against strict structural rules.

![Status](https://img.shields.io/badge/status-active-success) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black) ![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## ✨ Features

- **Unit Normalization Engine:** Automatically converts cargo weight from pounds (`lb`) to kilograms (`kg`) using standard conversion ratios (`1 lb = 0.45 kg`) without mutating original objects.
- **Comprehensive Manifest Validation:** Inspects container parameters (`containerId`, `destination`, `weight`, `unit`, `hazmat`) and detects missing or invalid entries with precise error mapping (`"Missing"` / `"Invalid"`).
- **Interactive UI Dashboard:** Allows manual testing with custom data or quick loading of valid/invalid sample templates.
- **Glassmorphism Aesthetic:** Designed with a sleek dark-mode theme, clean layouts, and responsive components.

---

## 🚀 Demo

Clone the repository and open `index.html` directly in your web browser—no build tools or external packages required!

---

## 🛠️ Built With

- **HTML5** - Semantic layout and structure
- **CSS3** - Custom styling, flexbox layouts, and glassmorphism effects
- **Vanilla JavaScript** - Core logic, error handling, immutability, and DOM manipulation

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/amirag9494/cargo-manifest-validator.git](https://github.com/amirag9494/cargo-manifest-validator.git)