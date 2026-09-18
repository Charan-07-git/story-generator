// Story Generator - Vanilla JavaScript
// Collection of story templates for each genre

// Story templates organized by genre
// Each genre has multiple templates for variety on repeated clicks
const storyTemplates = {
    adventure: [
        `
            {character} stood at the edge of {location}, looking out over the horizon. 
            The call to adventure had been clear, but the path ahead was uncertain. 
            With a deep breath, {character} stepped into the unknown, ready to face whatever challenges lay ahead. 
            The journey would test {character}'s courage and determination in ways {character} never imagined.
        `,
        `
            {character} had always dreamed of exploring {location}, but nobody expected {character} to actually embark on the journey. 
            When an ancient map appeared unexpectedly, {character} realized this was the adventure {character} had been waiting for. 
            Through dense forests and across rushing rivers, {character} pushed forward, discovering hidden strengths along the way.
        `,
        `
            A mysterious summons brought {character} to {location}, where an epic quest awaited. 
            The elders had chosen {character} for a reason, and the fate of the land rested {character}'s shoulders. 
            With each step deeper into the unknown, {character} uncovered ancient secrets and forged unlikely alliances.
        `,
    ],
    mystery: [
        `
            {character} arrived at {location} determined to solve the puzzling mystery that had haunted the town for years. 
            Clues were scattered everywhere, but the truth remained elusive. {character} methodically gathered evidence, 
            connecting dots that nobody else had noticed. The climax would reveal everything {character} had been searching for.
        `,
        `
            When strange occurrences began at {location}, {character} was called in to investigate. 
            {character} knew the answer lay in understanding the pattern, not just the symptoms. 
            Each piece of evidence led {character} deeper into the web of deception, until the final revelation turned everything upside down.
        `,
        `
            {character} had come to {location} as a last resort, but the mystery only deepened. 
            With {character}'s sharp eye for detail, patterns emerged that others had missed. The truth was closer than anyone thought, 
            buried in plain sight all along.
        `,
    ],
    fantasy: [
        `
            In the magical realm of {location}, {character} discovered {character}'s true destiny. 
            Ancient powers stirred within {character}, powers {character} never knew {character} possessed. 
            With guidance from wise mentors and facing formidable foes, {character} embarked on a journey of self-discovery.
        `,
        `
            The prophecy spoke of {character} who would wield {character}'s power at {location} to restore balance to the realm. 
            {character} hesitated at first, but the fate of the magical world depended on {character}'s courage. 
            {character} learned to harness {character}'s abilities and confront the darkness threatening everything {character} held dear.
        `,
        `
            {character} stumbled upon an ancient artifact in {location} that changed {character}'s fate forever. 
            The artifact chose {character} for a reason, and together they would restore light to the darkened lands. 
            Along the way, {character} formed bonds with magical creatures who would fight by {character}'s side.
        `,
    ],
    'sci-fi': [
        `
            {character} woke up on the research station orbiting {location} with no memory of how {character} got there. 
            The crew was gone, and the ship's systems were operating on their own. {character} had to uncover the truth 
            behind the mysterious disappearance while navigating the hazards of deep space.
        `,
        `
            A distress signal from {location} led {character} to a derelict spacecraft drifting in the cosmos. 
            As {character} explored the abandoned vessel, {character} discovered the fate of the crew and a technology 
            beyond anything {character} had ever seen. The journey home would depend on {character}'s ingenuity.
        `,
        `
            {character} was the last surviving member of the {location} colony, but an unexpected signal from Earth changed everything. 
            {character} had to decipher the alien communication and decide whether humanity was worth saving. The choice would 
            determine the future of the human race.
        `,
    ],
    romance: [
        `
            {character} never expected to find love in a place like {location}, but fate had other plans. 
            A chance meeting sparked something special, and what began as a simple connection quickly turned into something deeper. 
            {character} learned that love can blossom in the most unexpected corners of the world.
        `,
        `
            {character} had returned to {location} for {character}'s childhood friend's wedding, but {character} didn't expect 
            {character}'s path to cross with {character}'s first love. Old feelings resurfaced, and {character} had to decide 
            whether the past was meant to be repeated or left behind.
        `,
        `
            A moonlit evening at {location} provided the perfect backdrop for {character} and {character}'s connection to deepen. 
            The stars seemed to align, bringing {character} together in a moment neither would forget. 
            What began as a simple walk turned into a night that would change {character}'s heart forever.
        `,
    ],
    horror: [
        `
            {character} had always dismissed the stories about {location} being haunted, but experience had a way of changing minds. 
            {character} spent the night alone in the old house, and each creak and shadow tested {character}'s resolve. 
            The truth behind the haunting was far {character} had ever imagined.
        `,
        `
            {character} accepted the dare to spend the night at {location}, the most abandoned place in town. 
            As the hours passed, {character} heard whispers and felt {character} was never alone. The terrifying revelation 
            would leave {character} questioning everything {character} thought {character} knew about fear.
        `,
        `
            {character} had come to {location} seeking answers, but the only thing {character} found was terror. 
            The darkness had been waiting for {character} all along, and escape would not be as simple as {character} hoped. 
            The night would end differently than {character} had planned.
        `,
    ],
};

// DOM Elements
const storyForm = document.getElementById('storyForm');
const storySection = document.getElementById('storySection');
const storyCard = document.querySelector('.story-card');
const storyText = document.getElementById('storyText');
const storyMeta = document.getElementById('storyMeta');
const copyBtn = document.getElementById('copyBtn');
const generateAnotherBtn = document.getElementById('generateAnother');

// Render the story based on user inputs
function generateStory(character, location, genre, mood) {
    const templates = storyTemplates[genre] || storyTemplates.adventure;
    const randomIndex = Math.floor(Math.random() * templates.length);
    const template = templates[randomIndex];

    // Use mood to influence story tone if provided
    const moodModifier = mood ? ` with a ${mood} tone` : '';

    const story = template
        .replace(/{character}/g, character)
        .replace(/{location}/g, location)
        .replace(/{mood}/g, moodModifier);

    return story;
}

// Display the story in the UI
function displayStory(story, character, location, genre, mood) {
    storyText.textContent = story;

    // Update metadata
    const genreDisplay = genre.charAt(0).toUpperCase() + genre.slice(1);
    const moodDisplay = mood ? ` — ${mood}` : '';
    storyMeta.innerHTML = `<strong>Genre:</strong> ${genreDisplay}${moodDisplay} | <strong>Location:</strong> ${location}`;

    // Show story section, hide form
    storySection.style.display = 'block';
    storyCard.style.animation = 'none';
    storyCard.offsetHeight; // trigger reflow
    storyCard.style.animation = 'fadeInUp 0.5s ease forwards';

    // Show buttons
    copyBtn.disabled = false;
    generateAnotherBtn.style.display = 'inline-block';
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const character = document.getElementById('characterName').value.trim();
    const location = document.getElementById('location').value.trim();
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;

    // Validation
    if (!character || !location || !genre) {
        showValidationMessage();
        return;
    }

    // Generate and display story
    const story = generateStory(character, location, genre, mood);
    displayStory(story, character, location, genre, mood);
}

// Show validation message
function showValidationMessage() {
    // Create validation overlay if not exists
    let overlay = document.querySelector('.validation-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'validation-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        alignItems: 'center';
        justifyContent: 'center';
        zIndex = 1000;
        overlay.innerHTML = `
            <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; max-width: 400px;">
                <h3 style="margin-bottom: 1rem; color: #c0392b;">Missing Information</h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-dark);">Please fill in all required fields: Character Name, Location, and Genre.</p>
                <button style="background: #e74c3c; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">OK</button>
            </div>
        `;
        document.body.appendChild(overlay);
        
        overlay.querySelector('button').addEventListener('click', () => {
            overlay.remove();
        });
    }
}

// Handle "Generate Another" button
function handleGenerateAnother() {
    // Reset form and show form section
    storyForm.reset();
    storySection.style.display = 'none';
    copyBtn.disabled = true;
    generateAnotherBtn.style.display = 'none';
}

// Handle Copy Story button
function handleCopyStory() {
    const story = storyText.textContent;
    if (!story) return;

    navigator.clipboard.writeText(story).then(() => {
        // Show temporary feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.backgroundColor = var(--success-green);

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.backgroundColor = var(--warning-orange);
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = story;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
}

// Event Listeners
storyForm.addEventListener('submit', handleSubmit);
copyBtn.addEventListener('click', handleCopyStory);
generateAnotherBtn.addEventListener('click', handleGenerateAnother);

// Initialize: hide story section until first generation
storySection.style.display = 'none';

// Make sure form fields are not disabled initially
document.getElementById('genre').removeAttribute('disabled');