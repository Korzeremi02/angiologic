<script lang="ts">
    import { onMount } from 'svelte';
    import Img from '../image.jpg';
    let canvas;
    let undoStack = [];
    let redoStack = [];
    let currentColor = 'rgb(0, 0, 0)';
    let textColor = 'rgb(0, 0, 0)';
    let currentShape = 'line';
    let textValue = '';
    let fontSize = 20;
    let toolThickness = 2;
    let fillShape = false;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let firstX = 0;
    let firstY = 0;
    function saveundoStack() {
      redoStack = [];
      undoStack.push(canvas.toDataURL());
    }
    function undo() {
      console.log(undoStack);
      if (undoStack.length > 0) {
        redoStack.push(canvas.toDataURL());
        const previousState = undoStack.pop();
        const img = new Image();
        img.src = previousState;
        img.onload = function() {
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        }
      }
    }
    function redo() {
      if (redoStack.length > 0) {
            undoStack.push(canvas.toDataURL()); 
            const nextState = redoStack.pop();
            const img = new Image();
            img.onload = function() {
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0);
            };
            img.src = nextState;
        }
    }
    const changeColor = (color) => {
      currentColor = color;
    };
    const changeFontSize = (size) => {
      fontSize = size;
    };
    const changetextColor = (color) => {
      textColor = color;
    };
    const changeShape = (shape) => {
      currentShape = shape;
    }; 
    const clearCanvas = () => {
        const ctx = canvas.getContext('2d');
        const navbarHeight = window.innerHeight * 0.2;
        const width = (canvas.width = window.innerWidth);
        const height = (canvas.height = window.innerHeight - navbarHeight);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        const image = new Image();
        image.src = Img;
        image.onload = () => {
                ctx.drawImage(image, 0, 0, width, height);
        };
        ctx.fillRect(0, 0, width, height);
    };
    function saveImage() {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'croquis.png';
      link.click();
    }
    onMount(() => {
      const ctx = canvas.getContext('2d');
      const navbarHeight = window.innerHeight * 0.2;
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight - navbarHeight);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      const image = new Image();
      image.src = Img;
      image.onload = () => {
          ctx.drawImage(image, 0, 0, width, height);
      };
      image.onerror = (error) => {
  console.error('Erreur lors du chargement de l\'image:', error);
};
      canvas.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
          saveundoStack();
          isDrawing = true;
          const rect = canvas.getBoundingClientRect();
          lastX = event.clientX - rect.left;
          lastY = event.clientY - rect.top;
          firstX = lastX;
          firstY = lastY;
          console.log(lastX, lastY);
          if (currentShape === 'text') {
            if (textValue === '') {
              alert('Veuillez entrer du texte');
              return;
            }
            ctx.font = `${fontSize}px sans-serif`;
            ctx.fillStyle = textColor;
            ctx.fillText(textValue, lastX, lastY);
          }
        }
      });
    canvas.addEventListener('mousemove', (event) => {
        if (isDrawing) {
            const rect = canvas.getBoundingClientRect();
            const currentX = event.clientX - rect.left;
            const currentY = event.clientY - rect.top;
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = toolThickness;
            if (currentShape === 'line') {
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();
                [lastX, lastY] = [currentX, currentY];
            } else if (currentShape === 'erase') { 
                ctx.strokeStyle = 'rgb(255, 255, 255)';
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();
                [lastX, lastY] = [currentX, currentY];
            } else if (currentShape === 'rectangle') {
                console.log("Rectangle is so cool !");
            } else if (currentShape === 'circle') {
                console.log("Circle is so cool !");
            } else if (currentShape === 'gouache') {
                ctx.fillStyle = currentColor;
                ctx.beginPath();
                ctx.arc(lastX, lastY, toolThickness, 0, 2 * Math.PI);
                ctx.fill();
            }
            lastX = currentX;
            lastY = currentY;
        }
    });
      canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        if (currentShape === 'rectangle') {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = toolThickness;
            ctx.beginPath();
            ctx.rect(firstX, firstY, lastX - firstX, lastY - firstY);
            ctx.stroke();
        } else if (currentShape === 'circle') {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = toolThickness;
            ctx.beginPath();
            ctx.arc(firstX, firstY, Math.sqrt(Math.pow(lastX - firstX, 2) + Math.pow(lastY - firstY, 2)), 0, 2 * Math.PI);
            ctx.stroke();
        }
      });
      canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
      });
    });
  </script>

<style>
    .Editor { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); }
    .Editor-body { width: 100vw; height: 90vh; background-color: var(--color-background); display: flex; flex-direction: column-reverse; }
    .Editor-body-navbar { width: 100vw; height: 10vh; background-color: var(--color-navbar); }
    .Editor-body-Canvas { width: 100vw; height: 80vh; }
    .Editor-canvas-sct { width: 100%; height: 100%; }
</style>

<main>
    <div class="Editor">
        <div class="Editor-body">
          <div class="Editor-body-navbar">
            <input type="color" bind:value={currentColor} on:change={() => changeColor(currentColor)} />
            <select bind:value={currentShape} on:change={() => changeShape(currentShape)}>
              <option value="erase">Erase</option>
              <option value="line">Line</option>
              <option value="rectangle">Rectangle</option>
              <option value="circle">Circle</option>
              <option value="gouache">Gouache</option>
              <option value="text">Text</option>
            </select>
            <button on:click={() => clearCanvas()}>Clear</button>
            <input type="range" min="1" max="24" bind:value={toolThickness} />
            <input type="text" bind:value={textValue} placeholder="Entrez du texte ici"/>
            <input type="color" bind:value={textColor} on:change={() => changeBoxColor(textColor)}/>
            <input type="number" bind:value={fontSize} min="1" max="100" />
            <button on:click={saveImage}>Save</button>
            <button on:click={redo}>Redo</button>
            <button on:click={undo}>Undo</button>
          </div>
          <div class="Editor-body-Canvas">
            <canvas class="Editor-canvas-sct" bind:this="{canvas}">
              <p class="Editor-canvas-error-msg">Your browser doesn't support canvas.</p>
            </canvas>
          </div>
        </div>
      </div>
</main>