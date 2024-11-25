class RandomColor {
    constructor(buttonId, displayId) {
        this.button = document.getElementById(buttonId);
        this.display = document.getElementById(displayId);
        this.addColorChangeListener();
    }

    addColorChangeListener() {
        this.button.addEventListener("click", () => this.changeColor());
    }

    changeColor() {
        const newColor = this.randomColor();
        document.body.style.backgroundColor = newColor;
        this.updateColorDisplay(newColor);
    }

    randomColor() {
        const randomNumber = () => Math.round(Math.random() * 255);

       const color = [];

        for (let i = 0; i < 3; i++) {
            const num = randomNumber(); 
            color.push(num)
        }
        console.log(color);
        
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }

    updateColorDisplay(color) {
        document.querySelector('h2').textContent = `Color = ${color}`;  
    }
}

class CopyText {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.addCopyEventListener();
    }

    addCopyEventListener() {
        this.element.addEventListener("click", () => this.copyText());
    }

    copyText() {
        const tempInput = document.createElement("input");
        tempInput.value = this.element.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
}


new RandomColor('colorBtn', 'colorDisplay');
new CopyText('textToCopy');