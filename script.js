document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function changeTextColor() {
        const textElement = document.getElementById('name');
        textElement.style.color = getRandomColor();
    }

    const name = document.getElementById('name');
    if (name) {
        name.addEventListener('click', changeTextColor);
    }
});