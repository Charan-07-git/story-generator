# Story Generator

## About

Story Generator is a simple, interactive web application that allows users to create unique short stories by providing a character name, selecting a location, and choosing a genre. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates fundamental frontend development concepts without requiring any external dependencies, APIs, or build tools.

The application features multiple story templates for each genre, ensuring that repeated clicks can produce different and engaging narratives. Users can generate stories, copy them to the clipboard, and generate new stories again and again.

## Features

- **Multiple Genres**: Adventure, Mystery, Fantasy, Sci-Fi, Romance, and Horror
- **Multiple Templates**: Each genre has several unique story templates for variety
- **Dynamic Story Generation**: Stories dynamically incorporate the character name, location, and selected genre
- **Mood/Theme Selection**: Optional mood selection (heroic, dark, light, humorous) to influence story tone
- **Copy to Clipboard**: One-click copy of the generated story
- **Generate Another**: Easily create a new story with the same inputs
- **Input Validation**: Friendly validation messages if required fields are empty
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in effects and hover states
- **Accessible**: Proper labels, semantic HTML, keyboard-friendly controls, visible focus states

## Technologies Used

- **HTML5**: Semantic structure and form elements
- **CSS3**: Custom properties, responsive design, animations, and styling
- **Vanilla JavaScript**: DOM manipulation, event handling, and story generation logic

## How It Works

1. The user enters a character name and location, then selects a genre from the dropdown
2. Optionally, the user can select a mood/theme to influence the story tone
3. Clicking "Generate Story" triggers JavaScript to:
   - Select a random story template matching the chosen genre
   - Replace placeholders (`{character}`, `{location}`, `{mood}`) with the user's inputs
   - Display the personalized story in a beautiful card format
4. The user can copy the story to the clipboard or click "Generate Another" for a new story with the same inputs
5. To start over, simply refresh the page or enter new inputs

## Project Structure

```
story-generator/
├── index.html      # Main HTML structure with form and story display
├── style.css       # Modern, responsive CSS styling
├── script.js       # JavaScript logic for story generation and UI interaction
└── README.md       # This documentation file
```

## How to Run

1. **Open index.html**: Simply double-click `index.html` to open it in your default browser
2. **Using VS Code Live Server**: If you have VS Code with the Live Server extension:
   - Open the project folder in VS Code
   - Right-click `index.html` and select "Open with Live Server"
   - This provides a development server with automatic reloading

No build steps, npm packages, or external APIs are required. The entire application runs entirely in the browser.

## Future Improvements

- AI-generated stories using large language models
- More genres (Western, Comedy, Thriller, etc.)
- Story length selection (short, medium, long)
- User accounts to save favorite stories
- Local storage to persist generated stories
- Dark mode support
- Print story functionality

## Author

**Charan Teja Daraboina**