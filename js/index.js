//Rain Element Event
document.addEventListener('DOMContentLoaded', function() {
    const numberOfRaindrops = 200;  // Increased the number of raindrops

    for (let i = 0; i < numberOfRaindrops; i++) {
        createRaindrop();
    }

    function createRaindrop() {
        let raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
    
        // Set a random start position for left
        raindrop.style.left = Math.random() * window.innerWidth + 'px';
        // Adjusted top position to potentially start above the viewport
        raindrop.style.top = (Math.random() * window.innerHeight - 20) + 'px'; 
    
        // Adjust the height of the raindrop randomly by up to 3 pixels
        let heightVariation = Math.floor(Math.random() * 4); 
        raindrop.style.height = (10 + heightVariation) + 'px'; 
    
        document.body.appendChild(raindrop);
        moveRaindrop(raindrop);
    }

    function moveRaindrop(raindrop) {
        let startPosition = parseFloat(raindrop.style.top);
        let speed = Math.random() * 3 + 3;  // Base speed of 3 with a random addition of up to 3

        function step() {
            if (startPosition + parseInt(raindrop.style.height) < window.innerHeight) {
                startPosition += speed;
                raindrop.style.top = startPosition + 'px';
                requestAnimationFrame(step);
            } else {
                splashRaindrop(raindrop);
            }
        }
        step();
    }

    function splashRaindrop(raindrop) {
        raindrop.style.animation = "splash 0.4s forwards";
        setTimeout(() => {
            raindrop.remove();
            createRaindrop();
        }, 400);
    }
});

//Mouse Sparkle Event
document.addEventListener('mousemove', function(e) {
    const x = e.clientX +20;
    const y = e.clientY +20;

    for (let i = 0; i < 5; i++) {  // Creating 5 sparkles on each mouse move
        createSparkle(x+i+2, y+i+2);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    // Position the sparkle at the cursor's location
    sparkle.style.left = (x + Math.random() * 15 - 7.5) + 'px';  // Randomizing position a bit for a dispersed effect
    sparkle.style.top = (y + Math.random() * 15 - 7.5) + 'px';
    
    // Random Sparkle Color
    sparkle.style.background = random_bg_color();

    // Append the sparkle to the body
    document.body.appendChild(sparkle);

    // Animate the sparkle to dissipate
    setTimeout(() => {
        sparkle.style.transform = 'scale(1.5)';  // Sparkle grows a bit in size
        sparkle.style.opacity = '0';  // Sparkle fades out
    }, 20);  // Starts animation 20ms after creation for smoother effect

    // Remove the sparkle after animation completes
    setTimeout(() => {
        sparkle.remove();
    }, 520);  // Removing the sparkle after 520ms (20ms delay + 500ms animation duration)
}

//Background color function
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ")";
}