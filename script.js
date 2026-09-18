const characterInput = document.getElementById('character-name');
const locationInput = document.getElementById('location');
const genreSelect = document.getElementById('genre');
const moodSelect = document.getElementById('mood');
const form = document.getElementById('story-form');
const storySection = document.getElementById('story-section');
const emptyState = document.getElementById('empty-state');
const storyText = document.getElementById('story-text');
const storyCharacter = document.getElementById('story-character');
const storyLocation = document.getElementById('story-location');
const storyGenre = document.getElementById('story-genre');
const generateBtn = document.getElementById('generate-btn');
const generateAnotherBtn = document.getElementById('generate-another');
const copyStoryBtn = document.getElementById('copy-story');

// Story templates for each genre
// Each genre has multiple templates for variety on repeated clicks
const storyTemplates = {
    adventure: [
        `The sun rose over ${location}, casting golden light on our hero ${character}. Today was the day they finally embarked on the greatest adventure of their life. With a packed bag and a heart full of courage, ${character} set out to explore the mysterious paths that wound through the unknown. Little did ${character} know that the greatest treasure was not what they sought, but the friends they would make along the way.`,

        `Whispers of ancient quests called to ${character} from the far corners of ${location}. Armed with nothing but determination and a trusty map, ${character} ventured into the wild, where every rustle in the brush could be a new ally or a hidden danger. The journey tested ${character}'s resolve, but each challenge made ${character} stronger, wiser, and more ready for whatever lay ahead.`,

        `Deep in the heart of ${location}, a legendary quest awaited ${character}. With sword at side and determination in ${character}'s heart, ${character} faced roaring rivers, climbing steep cliffs, and solving riddles that guarded the old secrets. Each obstacle conquered brought ${character} one step closer to the fabled treasure that many had sought but few had found.`,
    ],
    mystery: [
        `Something was off about the old mansion on the hill above ${location}. When ${character} accepted the challenge to spend the night, no one warned them of the secrets hidden within those walls. As shadows lengthened and strange sounds echoed through the corridors, ${character} realized they were not alone - and the greatest mystery was yet to be uncovered.`,

        `A valuable heirloom had vanished from the town hall in ${location}, and the police had no leads. ${character}, known for ${character}'s sharp eye for detail, decided to investigate. Every clue led to another question, and every answer uncovered a deeper secret. Who could have committed the perfect crime, and why?'`,

        `The peaceful town of ${location} was shaken when a mysterious symbol was found carved into the town square. ${character}, a curious investigator, set out to discover its meaning. What followed was a trail of cryptic messages, hidden passages, and a revelation that would change ${character}'s understanding of the town forever.`,
    ],
    fantasy: [
        `In the realm of magic where ${location} floated among the clouds, ${character} discovered ${character}'s innate ability to commune with dragons. As a chosen one of the ancient order, ${character} embarked on a journey to restore balance to a world threatened by darkness. With each spell mastered, ${character} grew closer to fulfilling the prophecy foretold generations ago.`,

        `The enchanted forest of ${location} had guarded its secrets for centuries, until ${character} stumbled upon a glowing artifact pulsing with arcane energy. As ${character} touched the relic, ancient powers awakened within ${character}, drawing the attention of both allies and foes. ${character} would need to master ${character}'s new abilities quickly if ${character} hoped to protect the forest from those who sought to exploit its magic.`,

        `High in the spires of ${location}, the order of mages had trained ${character} since ${character} was a child. When the celestial alignment predicted the return of an ancient evil, ${character} was tasked with retrieving the three fragments of the broken seal. The journey would test ${character}'s courage, intellect, and mastery of the arcane arts.`,
    ],
    'sci-fi': [
        `Year 2345 found ${character} stationed at the orbital research outpost above ${location}. When a distress signal from an uncharted planet interrupted ${character}'s routine shift, ${character} made the daring decision to descend alone. What ${character} discovered on the surface would challenge everything ${character} knew about the universe and ${character}'s place in it.`,

        `The starship {character}'s course had brought {character} to the trading hub orbiting {location}, where alien technology and human innovation coexisted in a fragile peace. When a mysterious artifact activated, {character} found {character} at the center of a conflict that could spark an interstellar war. {character} would need to navigate diplomatic tensions and ancient alien wisdom to prevent catastrophe.`,

        `Deep space exploration brought {character} to the research colony on {location}, where experiments with quantum drives had unpredictable consequences. When the drive malfunctioned and pulled {character} through a wormhole to a galaxy far away, {character} had to find a way home while navigating unfamiliar worlds and civilizations that viewed ${character} as both a curiosity and a threat.`,
    ],
    romance: [
        `The annual harvest festival in {location} was the setting where {character} finally confessed ${}'s feelings under the string lights. What began as nervous small talk blossomed into a night of laughter, shared dreams, and a promise to meet again. The festival lights dimmed, but the connection {character} forged that evening would last a lifetime.`,

        `Rain had poured over {location} all week, forcing {character} to seek shelter in the cozy café where {character} first locked eyes with {character}. What started as a chance encounter over warm drinks turned into hours of conversation about everything and nothing. By the time the rain stopped, {character} knew ${}'s life would never be the same.`,

        `The bookstore in {location} was where {character} reached for the same final copy of a beloved novel. {Character} and {character} struck up a conversation about their favorite stories, discovering they shared more than just literary tastes. What followed was a romance written not in pages, but in the moments they spent discovering the world together.`,
    ],
    horror: [
        `The abandoned house on the edge of {location} had stood empty for decades, but {character} dared to enter. As the door creaked shut behind {character}, the air grew cold and unseen presence made {character}'s skin crawl. What waited in the darkness was more than {character} bargained for, and escape would require more than just courage.`,

        `A ghostly legend surrounded the old cemetery overlooking {location}, where {character} had come to investigate the strange occurrences reported by locals. Each step deeper into the grounds revealed more about the tragic story that bound the spirits to the earth. {Character} would need to understand the unfinished business of the before ${character} could find the way out.`,

        `Midnight at the lighthouse near {location} found {character} seeking shelter from a storm that wouldn't end. The beam of the light swept across {character}'s face, revealing secrets about the keeper who vanished decades ago. As the night progressed, {character} realized the true horror wasn't the ghost stories—but the reality that was far more terrifying.`,
    ],
};

// Function to get a random story template
function getRandomTemplate(genre) {
    const templates = storyTemplates[genre];
    if (!templates || templates.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * templates.length);
    return templates[randomIndex];
}

// Function to generate the story
function generateStory() {
    const character = characterInput.value.trim();
    const location = locationInput.value.trim();
    const genre = genreSelect.value;

    // Validation
    if (!character || !location || !genre) {
        showValidation();
        return;
    }

    // Get random story template for selected genre
    const template = getRandomTemplate(genre);
    if (!template) return;

    // Fill in the template with user inputs
    let story = template
        .replace(/\\$\\{character\\}/g, character)
        .replace(/\\$\\{location\\}/g, location);

    // Replace ${character} with character name for mood references
    story = story.replace(/\$\{character\}/g, character);

    // Display the story
    storyText.innerHTML = story;
    storyCharacter.textContent = `Character: ${character}`;
    storyLocation.textContent = `Location: ${location}`;
    storyGenre.textContent = `Genre: ${genre.charAt(0).toUpperCase() + genre.slice(1)}`;

    // Show story section, hide empty state
    storySection.classList.remove('hidden');
    emptyState.classList.add('hidden');
}

// Show validation message
function showValidation() {
    // Create validation message if not exists
    let validation = document.querySelector('.validation-message');
    if (!validation) {
        validation = document.createElement('div');
        validation.className = 'validation-message';
        validation.style.cssText = `
            background-color: #fed7d7;
            color: #c53030;
            padding: 12px 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
            font-size: 1rem;
            border: 1px solid #fc8181;
        `;
        form.insertBefore(validation, generateBtn);
    }

    validation.textContent = 'Please fill in all required fields (character name, location, and genre) before generating a story.';

    // Remove validation message after 3 seconds
    setTimeout(() => {
        if (validation.parentNode) {
            validation.parentNode.removeChild(validation);
        }
    }, 3000);
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    generateStory();
});

generateAnotherBtn.addEventListener('click', generateStory);

copyStoryBtn.addEventListener('click', () => {
    const story = storyText.textContent || storyText.innerText;
    if (story) {
        navigator.clipboard.writeText(story).then(() => {
            // Provide feedback
            const originalText = copyStoryBtn.textContent;
            copyStoryBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyStoryBtn.textContent = originalText;
            }, 2000);
        });
    }
});

// Initial state: show empty state, hide story section
emptyState.classList.remove('hidden');
storySection.classList.add('hidden');

// Initialize placeholder text removal on focus
characterInput.addEventListener('focus', () => {
    if (characterInput.value === '') {
        characterInput.placeholder = '';
    }
});

locationInput.addEventListener('focus', () => {
    if (locationInput.value === '') {
        locationInput.placeholder = '';
    }
});

locationInput.addEventListener('blur', () => {
    locationInput.placeholder = 'e.g., Hyderabad';
});

characterInput.addEventListener('blur', () => {
    if (!characterInput.value) {
        characterInput.placeholder = 'e.g., Arjun';
    }
});