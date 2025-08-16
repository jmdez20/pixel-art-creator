const colorPicker = document.getElementById('colorPicker');

const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d' );

const pixelSize = 16; 
const rows = canvas.height / pixelSize; 
const cols = canvas.width / pixelSize; 

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        ctx.strokeStyle = '#ccc';
        ctx.strokeRect(col * pixelSize , row * pixelSize, pixelSize, pixelSize);
    }
}

canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; 
    const mouseY = e.clientY - rect.top; 

    const col = Math.floor(mouseX / pixelSize);
    const row = Math.floor(mouseY / pixelSize);

    ctx.fillStyle = colorPicker.value;
    ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
});

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.strokeStyle = '#ccc';
            ctx.strokeRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
        }
    }
});

// Handle the Save button
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL();
    link.click();
});
