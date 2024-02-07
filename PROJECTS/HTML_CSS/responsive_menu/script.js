
// This is the JavaScript file for the responsive menu project.


document.querySelector('.hamburger').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } 
    else {
        navLinks.style.display = 'none';
    }
});

