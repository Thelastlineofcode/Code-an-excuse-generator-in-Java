// Generate random stars for background
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Excuse generator with planets and urban slang
function generateExcuse() {
    // Arrays with space/planet theme and urban slang
    let who = [
        'My homeboy from Mars',
        'That sus alien from Neptune',
        'The boujee Plutonian',
        'My ride-or-die from Saturn',
        'The Jupiter gang',
        'That Mercury messenger dude',
        'The Venus squad',
        'My Uranus connect',
        'The asteroid belt crew',
        'That galaxy far far away fam',
        'The Space Karen',
        'My extraterrestrial bestie',
        'The Moon colony bros',
        'That wormhole entity'
    ];
    
    let action = [
        'straight up yeeted',
        'lowkey vaporized',
        'no cap teleported',
        'deadass abducted',
        'literally photon-blasted',
        'went full supernova on',
        'galaxy-ghosted',
        'quantum-slapped',
        'orbital-dunked on',
        'space-time warped',
        'meteor-showered',
        'black-hole sucked',
        'cosmic-ray fried',
        'gravity-flipped'
    ];
    
    let what = [
        'my vibe check results',
        'the drip I was gonna wear',
        'my emotional support asteroid',
        'the WiFi password to Earth',
        'my rocket fuel stash',
        'the space-time continuum',
        'my anti-gravity sneakers',
        'the intergalactic peace treaty',
        'my collection of moon rocks',
        'the solar system group chat',
        'my telepathic homework',
        'the coordinates to Area 51',
        'my alien registration papers',
        'the universal translator app'
    ];
    
    let when = [
        'while I was binge-watching black holes',
        'during the cosmic rave last night',
        'when Mercury was in microwave',
        'while I was sliding into the DMs of NASA',
        'during my hot girl summer on Venus',
        'when I was catching feelings in zero gravity',
        'while I was main character energy surfing on Saturn\'s rings',
        'during the solar flare TikTok challenge',
        'when I was touching grass on Mars',
        'while Mercury was in Gatorade',
        'during my spiritual awakening at light speed',
        'when the aliens were spilling the tea',
        'while I was living my best life in the asteroid belt',
        'during the full moon ritual gone wrong'
    ];

    // Generate random indices
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // Concatenate the excuse
    let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}!`;
    
    return excuse;
}

// Set the excuse when the page loads
window.onload = function() {
    createStars();
    document.getElementById('excuse').innerHTML = generateExcuse();
};