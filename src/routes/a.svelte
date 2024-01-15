<script lang="ts">
    import { onMount } from 'svelte';
    import { imageStore } from './imageStore.js';
  
    let canvas;
    let undoStack = [];
    let redoStack = [];
    let currentColor = 'rgb(0, 0, 0)';
    let textColor = 'rgb(0, 0, 0)';
    let currentShape = 'line';
    let textValue = '';
    let fontSize = 20;
    let toolThickness = 2;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let firstX = 0;
    let firstY = 0;
  
    function saveUndoStack() {
      redoStack = [];
      undoStack.push(canvas.toDataURL());
    }
  
    function undo() {
      if (undoStack.length > 0) {
        redoStack.push(canvas.toDataURL());
        const previousState = undoStack.pop();
        const img = new Image();
        img.src = previousState;
        img.onload = function () {
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    }
  
    function redo() {
      if (redoStack.length > 0) {
        undoStack.push(canvas.toDataURL());
        const nextState = redoStack.pop();
        const img = new Image();
        img.onload = function () {
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
  
    const changeTextColor = (color) => {
      textColor = color;
    };
  
    const changeShape = (shape) => {
      currentShape = shape;
    };
  
    const clearCanvas = () => {
      const ctx = canvas.getContext('2d');
      const navbarWidth = window.innerWidth * 0.25;
      const width = (canvas.width = window.innerWidth - navbarWidth);
      const height = (canvas.height = window.innerHeight);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      imageStore.subscribe((image) => {
        let img = new Image();
        img.onload = function () {
          ctx.drawImage(img, 0, 0, width, height);
        };
        img.src = image;
      });
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
      const width = parseFloat(getComputedStyle(canvas).width);
      const height = parseFloat(getComputedStyle(canvas).height);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      imageStore.subscribe((image) => {
        let img = new Image();
        img.onload = function () {
          ctx.drawImage(img, 0, 0, width, height);
        };
        img.src = image;
      });
      ctx.fillRect(0, 0, width, height);
  
      canvas.addEventListener('mousedown', (event) => {
        if (event.button === 0) {
          saveUndoStack();
          isDrawing = true;
          const rect = canvas.getBoundingClientRect();
          lastX = event.clientX - rect.left;
          lastY = event.clientY - rect.top;
          firstX = lastX;
          firstY = lastY;
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
            ctx.closePath();
          } else if (currentShape === 'erase') {
            ctx.strokeStyle = 'rgb(255, 255, 255)';
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
            [lastX, lastY] = [currentX, currentY];
            ctx.closePath();
          } else if (currentShape === 'rectangle') {
          } else if (currentShape === 'circle') {
          } else if (currentShape === 'gouache') {
            ctx.fillStyle = currentColor;
            ctx.beginPath();
            ctx.arc(currentX, currentY, toolThickness, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
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
          ctx.closePath();
        } else if (currentShape === 'circle') {
          ctx.strokeStyle = currentColor;
          ctx.lineWidth = toolThickness;
          ctx.beginPath();
          ctx.arc(
            firstX,
            firstY,
            Math.sqrt(Math.pow(lastX - firstX, 2) + Math.pow(lastY - firstY, 2)),
            0,
            2 * Math.PI
          );
          ctx.stroke();
          ctx.closePath();
        }
      });
  
      canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
      });
    });
  </script>
  
  <style>
    .Editor {
      height: 90vh;
      width: 100vw;
      margin: 0;
      overflow: hidden;
      background-color: var(--color-background);
    }
    .Editor-body {
      width: 100vw;
      height: 90vh;
      background-color: var(--color-background);
      display: flex;
      flex-direction: row;
    }
    
    