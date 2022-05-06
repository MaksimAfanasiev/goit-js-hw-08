   

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(Vimeo)

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
