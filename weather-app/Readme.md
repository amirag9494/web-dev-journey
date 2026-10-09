# City Weather App

A lightweight, responsive weather application built with vanilla JavaScript, modern CSS, and semantic HTML. The app fetches and displays real-time atmospheric conditions for global metropolitan areas using a freeCodeCamp proxy API.

## Features

- **Asynchronous Data Fetching**: Retrieves real-time data using the native `fetch` API and `async/await` syntax.
- **Defensive Data Handling**: Handles missing parameters with fallbacks (`N/A`) and captures network errors with user-facing alerts.
- **Glassmorphic UI**: Clean, responsive dashboard designed with modern CSS custom properties and backdrop filters.
- **Zero Dependencies**: Pure HTML5, CSS3, and modern ECMAScript without external libraries or frameworks.

## Cities Monitored

- New York
- Los Angeles
- Chicago
- Paris
- Tokyo
- London

## Metrics Displayed

- Main temperature (°C)
- Feels-like temperature (°C)
- Current condition & condition icon
- Atmospheric humidity (%)
- Wind speed (m/s) & wind gusts (m/s)

## Getting Started

1. Clone this repository:
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in any modern web browser or run it using a local development server (e.g., Live Server in VS Code).

## Project Structure

```text
├── index.html        # Markup and application layout
├── styles.css        # Responsive styling and glassmorphism theme
├── script.js         # API integration and DOM updates
└── README.md         # Documentation
```