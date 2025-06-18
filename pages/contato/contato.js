document.addEventListener('DOMContentLoaded', function() {
    const emailIcon = document.querySelector('.container');
    const emailBox = document.getElementById('email-box');

    emailIcon.addEventListener('click', function() {
        if (emailBox.classList.contains('fade-in')) {
            emailBox.classList.remove('fade-in');
            emailBox.classList.add('fade-out');
            setTimeout(() => {
                emailBox.style.display = 'none';
                emailBox.classList.remove('fade-out');
            }, 500);
        } else {
            emailBox.style.display = 'block';
            emailBox.classList.add('fade-in');
        }
    });
});