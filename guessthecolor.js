document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('yourElementId');
    if (element) {
        element.addEventListener('click', loadGame);
    } else {
        console.error('Element not found');
    }
});

function loadGame() {
    // Your game loading logic here
    console.log('Game loaded');
}
