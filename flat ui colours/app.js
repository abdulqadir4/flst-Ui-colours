const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#33FFF3', '#F3FF33'];

const colorContainer = document.getElementById('colorContainer');

colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;
    colorBox.addEventListener('click', () => {
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied ${color} to clipboard!`);
        });
    });
    colorContainer.appendChild(colorBox);
});
