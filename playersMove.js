import { playerL, playerR, fieldTopY, fieldHeight, playerHeight } from './app.js';
const playerStep = 32;

const getNewPosition = (currentY, direction) => {
  const isUpDirection = direction === 'KeyW' || direction === 'ArrowUp';
  return currentY + (isUpDirection ? -playerStep : playerStep);
}

document.addEventListener('keydown', (e) => {
  const currentYLeft = playerL.getBoundingClientRect().y - fieldTopY;
  const currentYRight = playerR.getBoundingClientRect().y - fieldTopY;

  if (e.code === 'KeyW') {
    const newPosition = getNewPosition(currentYLeft, e.code);

    if (newPosition < 0 && newPosition > -playerStep || newPosition < 0) {
      playerL.style.transform = `translateY(0)`;
      return;
    }

    playerL.style.transform = `translateY(${newPosition}px)`;
  }
  if (e.code === 'KeyS') {
    const newPosition = getNewPosition(currentYLeft, e.code);
    
    if (newPosition > fieldHeight - 40 && newPosition < fieldHeight || newPosition > fieldHeight - 40) {
      playerL.style.transform = `translateY(${fieldHeight - playerHeight}px)`;
      return;
    }

    playerL.style.transform = `translateY(${newPosition}px)`;
  }

  if (e.code === 'ArrowUp') {
    const newPosition = getNewPosition(currentYRight, e.code);

    if (newPosition < 0 && newPosition > -playerStep || newPosition < 0) {
      playerR.style.transform = `translateY(0)`;
      return;
    }

    playerR.style.transform = `translateY(${newPosition}px)`;
  }
  if (e.code === 'ArrowDown') {
    const newPosition = getNewPosition(currentYRight, e.code);

    if (newPosition > fieldHeight - 40 && newPosition < fieldHeight || newPosition > fieldHeight - 40) {
      playerR.style.transform = `translateY(${fieldHeight - playerHeight}px)`;
      return;
    }

    playerR.style.transform = `translateY(${newPosition}px)`;
  }
});