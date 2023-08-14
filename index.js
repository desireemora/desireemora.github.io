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