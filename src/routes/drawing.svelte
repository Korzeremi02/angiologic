<script lang="ts">
    import { onMount } from 'svelte';
    import { imageStore } from './imageStore';
    import Img from '../assets/drawings/1.jpg';
    import Logo from '../assets/icons/logo.png';
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
            imageStore.subscribe(image => {
                let img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0, 0);
                };
                img.src = image;
            });
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
      const navbarWidth = window.innerWidth * 0.25;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      ctx.fillStyle = 'rgb(255, 255, 255)';
      imageStore.subscribe((image) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      });
      canvas.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
          saveundoStack();
          isDrawing = true;
          const rect = canvas.getBoundingClientRect();
          lastX = event.offsetX;
          lastY = event.offsetY;
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
            const currentX = event.offsetX;
            const currentY = event.offsetY;
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
    .Editor-body { width: 100vw; height: 90vh; background-color: var(--color-background); display: flex; flex-direction: row; }
    .Editor-body-navbar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar); }
    .Editor-body-navbar-logo { width: 100%; height: 20%; display: flex; justify-content: center; align-items: center; }
    #Editor-logo { width: 90%; height: auto; }
    .Editor-body-navbar-toolSct { background-color: red; }
    .Editor-body-navbar-toolSct-title { }
    .Editor-body-navbar-toolSct-title-text { color: var(--color-font); font-size: 1.5rem; font-family: var(--main-font);}
    .Editor-body-navbar-textSct { background-color: green; }
    .Editor-body-navbar-textSct-title { }
    .Editor-body-navbar-textSct-title-text { color: var(--color-font); font-size: 1.5rem; font-family: var(--main-font);}
    .Editor-body-navbar-settings { background-color: blue; }
    .Editor-body-navbar-settings-title { }
    .Editor-body-navbar-settings-title-text { color: var(--color-font); font-size: 1.5rem; font-family: var(--main-font);}
    .Editor-body-Canvas { width: 75vw; height: 90vh; display: flex; justify-content: center; align-items: center; }
    .Editor-canvas-sct { width: 90vh; height: 90vh; }
</style>

<main>
    <div class="Editor">
        <div class="Editor-body">
          <div class="Editor-body-navbar">
            <div class="Editor-body-navbar-logo">
                <img id="Editor-logo" src={Logo} alt="logo" />
            </div>
            <div class="Editor-body-navbar-toolSct">
                <div class="Editor-body-navbar-toolSct-title">
                    <p class="Editor-body-navbar-toolSct-title-text">Tools</p>
                </div>
                <div class="Editor-body-navbar-toolSct-Toolkit">
                    <select bind:value={currentShape} on:change={() => changeShape(currentShape)}>
                      <option value="erase">Erase</option>
                      <option value="line">Line</option>
                      <option value="rectangle">Rectangle</option>
                      <option value="circle">Circle</option>
                      <option value="gouache">Gouache</option>
                      <option value="text">Text</option>
                    </select>
                </div>
                <div class="Editor-body-navbar-toolSct-Color">
                    <input type="color" bind:value={currentColor} on:change={() => changeColor(currentColor)} />
                </div>
                <div class="Editor-body-navbar-toolSct-thick">
                    <input type="range" min="1" max="24" bind:value={toolThickness} />
                </div>
            </div>
            <div class="Editor-body-navbar-textSct">
                <div class="Editor-body-navbar-textSct-title">
                    <p class="Editor-body-navbar-textSct-title-text">Text</p>
                </div>
                <div class="Editor-body-navbar-textSct-txtTool">
                    <input type="text" bind:value={textValue} placeholder="Entrez du texte ici"/>
                </div>
                <div class="Editor-body-navbar-textSct-txtSize">
                    <input type="number" bind:value={fontSize} min="1" max="100" />
                </div>
                <div class="Editor-body-navbar-textSct-txtColor">
                    <input type="color" bind:value={textColor} on:change={() => changeBoxColor(textColor)}/>
                </div>
            </div>
            <div class="Editor-body-navbar-settings">
                <div class="Editor-body-navbar-settings-title">
                    <p class="Editor-body-navbar-settings-title-text">Settings</p>
                </div>
                <div class="Editor-body-navbar-settings-btn">
                    <button on:click={() => clearCanvas()}>Clear</button>
                    <button on:click={saveImage}>Save</button>
                    <button on:click={redo}>Redo</button>
                    <button on:click={undo}>Undo</button>
                </div>
            </div>
          </div>
          <div class="Editor-body-Canvas">
            <canvas class="Editor-canvas-sct" bind:this="{canvas}">
              <p class="Editor-canvas-error-msg">Your browser doesn't support canvas.</p>
            </canvas>
          </div>
        </div>
      </div>
</main>