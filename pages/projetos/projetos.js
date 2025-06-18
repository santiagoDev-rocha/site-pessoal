document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.getElementById('github-button');

    githubButton.addEventListener('click', function() {
        window.open('https://github.com/santiagoDev-rocha?tab=repositories', '_blank');
    });
});