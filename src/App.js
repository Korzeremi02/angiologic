import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import './App.scss';

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas('canvaSct', {
      backgroundColor: '#fff',
      width: 800,
      height: 600,
    });

    canvas.on('mouse:down', (options) => {
      if (options.target) return;
      const rect = new fabric.Rect({
        left: options.pointer.x,
        top: options.pointer.y,
        width: 50,
        height: 50,
        fill: 'red',
      });
      canvas.add(rect);
    });
  }, []); 

  return (
    <div className="App">
      <div className='AppHeader'></div>
      <div className='AppContent'>
        <div className='UserArea'>
          <div className='InputArea'>
            <div className='BtnArea'>
              <input type='submit' value='Crayon'></input>
              <input type='submit' value='Gomme'></input>
              <input type='submit' value='Remplir'></input>
              <input type='submit' value='Rectangle'></input>
              <input type='submit' value='Télécharger'></input>
            </div>
          </div>
          <div className='CanvaArea'>
            <div className='CanvaSct' id='canvaSct'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
