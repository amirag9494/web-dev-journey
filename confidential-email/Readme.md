Confidential Email Page
A stylized, secure-looking email layout built to practice CSS box models, sizing controls, text transforms, and visual filters.

🚀 Key Features & Implementation Details
Precise Box Model Control: Utilizes box-sizing: border-box to ensure padding and borders are perfectly calculated within the fixed 500px width constraint.
Rotated Security Badges: Features inline-block elements (#confidential and #top-secret) styled with borders, padding, left margins, and custom CSS transform: rotate() effects.
Confidential Masking (Blur Effect): Employs CSS filter: blur(3px) on .blurred spans to simulate redacted or classified text for an immersive security aesthetic.
Interactive Hover States: Blur filters clear on mouseover to reveal hidden details smoothly.
📂 Project Structure
├── index.html    # Semantic document structure containing the email container, headers, and redacted text
└── styles.css    # Box model properties, rotations, borders, and filter effects
