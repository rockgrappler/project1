document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');

    themeBtn.addEventListener('click', () => {
        if (document.body.classList.toggle('dark-theme')) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    });
});



