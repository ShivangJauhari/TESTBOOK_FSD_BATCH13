






// Path: script.js for card background image
    window.onload = function() {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            var img = card.querySelector('img');
            var imageUrl = img.src;
            card.style.backgroundImage = 'url(' + imageUrl + ')';
            card.style.backgroundSize = '100% 100%';
            card.style.backgroundPosition = 'center'; // center the background image
            card.style.opacity = '1';
            card.style.zIndex = '-1';
            img.style.display = 'none'; // hide the img element
        });
    };
