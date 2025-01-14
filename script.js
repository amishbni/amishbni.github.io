document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function getRandomPosition() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const x = Math.floor(Math.random() * (screenWidth - 100));
        const y = Math.floor(Math.random() * (screenHeight - 50));
        return { x, y };
    }
    
    function getRandomFontSize() {
        return `${(Math.random() * 3 + 3).toFixed(2)}em`; // Random size between 3 and 6
    }

    async function getRandomFont() {
          const fonts = [
              "cursive",
              "monospace",
              "serif",
              "sans-serif",
              "fantasy",
              "default",
              "Arial",
              "Arial Black",
              "Arial Narrow",
              "Arial Rounded MT Bold",
              "Bookman Old Style",
              "Bradley Hand ITC",
              "Century",
              "Century Gothic",
              "Comic Sans MS",
              "Courier",
              "Courier New",
              "Georgia",
              "Gentium",
              "Impact",
              "King",
              "Lucida Console",
              "Lalit",
              "Modena",
              "Monotype Corsiva",
              "Papyrus",
              "Tahoma",
              "TeX",
              "Times",
              "Times New Roman",
              "Trebuchet MS",
              "Verdana",
              "Verona"
          ];
        if (fonts.length === 0) {
            return 'Arial, sans-serif';
        }
        const randomIndex = Math.floor(Math.random() * fonts.length);
        return fonts[randomIndex];
    }

    async function changeTextStyle() {
        const textElement = document.getElementById('name');
        if (textElement) {
            textElement.style.color = getRandomColor();

            const {x, y} = getRandomPosition();
            textElement.style.position = 'absolute';
            textElement.style.left = `${x}px`;
            textElement.style.top = `${y}px`;

            textElement.style.fontSize = getRandomFontSize();
            textElement.style.fontFamily = await getRandomFont();
        }
    }

    const name = document.getElementById('name');
    if (name) {
        name.addEventListener('click', changeTextStyle);
    }
});