# 📋 Customer Complaint Portal

A robust, fully-validated customer complaint form application built with vanilla JavaScript, HTML5, and CSS3. Designed to meet strict validation rules, conditional field requirements, and real-time visual feedback.

## 🚀 Features

- **Real-time Validation**: Input borders dynamically shift to **green** upon valid changes and **red** when invalid.
- **Advanced Regular Expressions**: Validates specialized formats like order numbers (starting with `2024`) and complex product codes (`XX##-X###-XX#`).
- **Conditional Fields**: Automatically enforces character minimum limits (20+ characters) when specific "Other" options are selected.
- **Comprehensive Core Functions**: Includes structured `validateForm()` returning validation states for all fields, and `isValid()` checking overall form integrity.

## 🛠️ Built With

- **HTML5** - Semantic form structure and layout
- **CSS3** - Modern, clean styling with dynamic state borders
- **JavaScript (ES6+)** - Form control logic, regex pattern matching, and DOM manipulation

## 📂 Project Structure

```text
├── index.html       # Main application UI
├── styles.css       # Clean, modern styling & state classes
└── script.js        # Core validation engine and event listeners