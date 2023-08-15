//Mouse Sparkle Event
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;// + 20;
    const y = e.clientY + document.documentElement.scrollTop;
    const xBuffer = 30; //size of mouse sparkle
    const yBuffer = 30;

    if (x - xBuffer > 0 && x + xBuffer < window.outerWidth && 
        y - yBuffer > 0 && y + yBuffer < window.outerHeight + document.documentElement.scrollTop) {
        for (let i = 0; i < 5; i++) {
            createSparkle(x, y);
        }
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