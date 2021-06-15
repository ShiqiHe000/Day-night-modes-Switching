const moonPath =
    "M15 28C15 43.1878 28 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28C0.5 12.8122 12.8122 0.5 28 0.5C28 0.5 15 12.8122 15 28Z";

const sunPath =
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.getElementById('darkMode');

let night = false;

// click the sun
darkMode.addEventListener('click', () => {
    // use Anime.js
    const timeline = anime.timeline({
        duration: 750, 
        easing: "easeOutExpo"
    })

    timeline.add({
        targets: ".sun", 
        d: [
            {value: night ? sunPath : moonPath}
        ]
    })
    .add({
        targets: '#darkMode', 
        rotate:  night ? 0 : 320, 
    }, "-=350")
    .add({
        targets: 'section', 
        backgroundColor: night ? 'rgb(199, 199, 199)' : 'rgb(22, 22, 22)', 
        color: night ? 'rgb(22, 22, 22)' : 'rgb(199, 199, 199)'
    }, '-= 700')

    if(!night) {
        night = true;
    } else {
        night = false;
    }
})
