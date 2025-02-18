document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const devText = document.getElementById('dev');
    
    themeBtn.addEventListener('click', () => {
        if (document.body.classList.toggle('dark-theme')) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }

        if (devText) {
            // Restart the typing animation
            devText.style.animation = 'none';  // Remove animation
            void devText.offsetWidth;         // Force reflow to reset animation
            devText.style.animation = 'typing 3s steps(21, end) forwards, blinking 0.8s step-end infinite';
        }
    });
});

 
 


