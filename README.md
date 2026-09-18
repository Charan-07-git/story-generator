# Story Generator

## About

Story Generator is a simple, interactive web application that allows users to create personalized short stories. By entering a character name, selecting a genre, and specifying a location, users can generate unique creative stories instantly. The project is built entirely with HTML5, CSS3, and Vanilla JavaScript—no frameworks, no APIs, and no backend required.

This makes it an ideal college mini-project for demonstrating frontend development skills, DOM manipulation, and creative design.

## Features

- **Multiple Genres**: Generate stories in Adventure, Mystery, Fantasy, Sci-Fi, Romance, and Horror genres
- **Dynamic Templates**: Each genre has multiple unique story templates for varied outcomes
- **Personalized Stories**: Stories dynamically use the character name, location, and selected genre
- **Random Selection**: Each "Generate" click can produce a different story from the available templates
- **Copy to Clipboard**: Easily copy the generated story to share or save
- **Generate Another**: Quickly create new stories without resetting inputs
- **Input Validation**: Friendly messages if required fields are empty
- **Empty State**: Welcome message before the first story is generated
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and subtle hover states
- **Accessible**: Proper labels, focus states, and semantic HTML

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties, flexbox, responsive design, animations
- **JavaScript**: DOM manipulation, event handling, template literals, arrays/objects

## How It Works

1. The user enters a character name in the input field
2. The user selects a location in the second input field
3. The user chooses a genre from the dropdown menu
4. Clicking "Generate Story" triggers the JavaScript to:
   - Validate that all required fields are filled
   - Select a random story template matching the chosen genre
   - Replace template placeholders with the user's character name and location
   - Display the personalized story in a card format
5. The user can click "Generate Another" for a different story from the same genre
6. The user can click "Copy Story" to copy the generated text to their clipboard

## Project Structure

```
story-generator/
├── index.html       # Main HTML structure and UI
├── style.css        # All styling and responsive design
├── script.js        # Story generation logic and interactivity
└── README.md        # Project documentation
```

## How to Run

1. **Using VS Code Live Server**:
   - Open the project in Visual Studio Code
   - Right-click on `index.html` and select "Open with Live Server"
   - Or click the Live Server icon that appears at the bottom right

2. **Opening directly**:
   - Double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" > your preferred browser

The application works entirely client-side in the browser. No server, no installation, no dependencies required.

## Future Improvements

- AI-generated stories using OpenAI or similar services
- More genres ( thriller, comedy, historical, etc.)
- Story length selection (short, medium, long)
- User accounts to save favorite stories
- Local storage to persist generated stories
- Dark mode theme
- Share stories via social media

## Author

**Charan Teja Daraboina**