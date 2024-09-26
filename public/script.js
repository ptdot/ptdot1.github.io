document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const trackList = document.getElementById('trackList');

    // Fetch the list of music files from the server
    fetch('/tracks')
        .then(response => response.json())
        .then(tracks => {
            tracks.forEach(track => {
                const li = document.createElement('li');
                li.textContent = track;
                li.addEventListener('click', () => {
                    audioPlayer.src = `/music/${track}`;
                    audioPlayer.play();
                });
                trackList.appendChild(li);
            });
        });
});
