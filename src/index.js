const randomColor = () => {
        const randomNumber = () => Math.round(Math.random() * 255);

       const color = [];

        for (let i = 0; i < 3; i++) {
            const num = randomNumber(); 
            color.push(num)
        }
        console.log(color);
        
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;        
}

const updateColor = (color) => {
    document.querySelector('h2').textContent = `Color = ${color}`;
} 


document.getElementById('colorBtn').addEventListener('click', () =>{
    const newColor = randomColor(); 
    document.body.style.backgroundColor = newColor;
    updateColor(newColor);
});