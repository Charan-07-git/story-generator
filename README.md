# Story Generator

## About

**Story Generator** is a simple, interactive web application that allows users to create unique, personalized short stories. By entering a character name, selecting a genre, and specifying a location, users can generate creative stories instantly. The application features multiple story templates for each genre, ensuring that repeated clicks produce different and engaging results.

This project is designed as a beginner-friendly college mini-project that demonstrates HTML5, CSS3, and vanilla JavaScript capabilities without any external dependencies, APIs, or build tools.

## Features

- **Multiple Genres**: Generate stories in Adventure, Mystery, Fantasy, Sci-Fi, Romance, and Horror genres
- **Personalized Stories**: Stories dynamically use the character name, location, and selected genre
- **Random Story Selection**: Multiple templates per genre ensure variety with each generation
- **Copy to Clipboard**: One-click copy of the generated story
- **Generate Another**: Easily create a new story without refreshing the page
- **Input Validation**: Friendly messages when required fields are empty
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessible**: Proper labels, semantic HTML, keyboard-friendly controls, focus states
- **Smooth Animations**: Card reveal animations and interactive feedback

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern card-based layout, responsive design, animations, and color palette
- **JavaScript (Vanilla)**: Story generation logic, DOM manipulation, event handling, clipboard API

## How It Works

1. **User Input**: The user enters a character name, location, and selects a genre from the dropdown
2. **Story Generation**: JavaScript selects a random story template matching the chosen genre and replaces placeholders with the user's inputs
3. **Display**: The generated story appears in a styled card with smooth animation
4. **Actions**: User can copy the story to clipboard or generate another story with new random inputs

## Project Structure

```
story-generator/
├── index.html      # Main HTML file with UI structure
├── style.css       # CSS styles for responsive design and visual presentation
├── script.js       # JavaScript logic for story generation and interactivity
└── README.md       # Project documentation
```

## How to Run

1. **Open index.html**: Simply double-click `index.html` to open it in your default web browser
2. **Using VS Code Live Server**: If you have VS Code, install the "Live Server" extension and right-click `index.html` > "Open with Live Server" for the best experience
3. **No build step required**: This is a pure frontend project with no dependencies, npm, or build configuration needed

## Future Improvements

- AI-generated stories using local or on-device models
- More genres (Thriller, Comedy, Historical, etc.)
- Story length selection (short, medium, long)
- User accounts to save favorite stories
- Local storage to persist generated stories
- Dark mode theme
- Mobile-specific optimizations

## Author

**Charan Teja Daraboina**