# Pricing Plans Layout Page

A modern, responsive pricing plans layout built to practice advanced **Flexbox** properties, container wrapping, and order manipulation in CSS.

## 🚀 Key Features & Implementation Details
* **Flexible Container (`display: flex` & `flex-wrap`):** Automatically wraps and organizes pricing cards gracefully across different screen sizes.
* **Column-Based Card Layout:** Each card uses `flex-direction: column` alongside `justify-content: space-between` to structure content cleanly from top to bottom.
* **Precise Sizing & Constraints (`flex: 0 0 200px`):** Ensures a consistent base width for cards while preventing unintended growing or shrinking.
* **Reordering & Growth (`order` & `flex-grow`):** Utilizes CSS `order` to rearrange visual sequences independently of the HTML structure, and `flex-grow: 2` to highlight the **Pro** plan.
* **Dark Aesthetic UI:** Styled with a sleek dark theme, smooth hover elevations, and distinct visual hierarchy.

## 📂 Project Structure
```text
├── index.html    # Semantic structure containing the main title and pricing cards
└── styles.css    # Flexbox configurations, ordering rules, and custom dark theme styling