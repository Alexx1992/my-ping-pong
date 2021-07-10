
  const field = document.getElementById('main-field');

  const ball = document.getElementById('ball');

  export const playerL = document.getElementById('left-palyer');
  export const playerR = document.getElementById('right-palyer');

  const scoreL = document.getElementById('left-score');
  const scoreR = document.getElementById('right-score');

  export const { offsetWidth: fieldWidth, offsetHeight: fieldHeight } = field;

  export const { 
    y: fieldTopY,
    x: fieldLeftX
  } = field.getBoundingClientRect();

  export const { offsetHeight: playerHeight,  offsetWidth: playerWidth } = playerL; // 40, 6

  const currentPlayerLXPos = playerL.getBoundingClientRect().x - fieldLeftX + playerWidth;
  const currentPlayerRXPos = playerR.getBoundingClientRect().x - fieldLeftX;

  function convertPosX(x) {
    return x - fieldLeftX;
  }

  function convertPosY(y) {
    return y - fieldTopY;
  }

  export let animationId = 0;
  const init = () => {
    const ballSize = ball.offsetWidth;
    const playerInitPosition = fieldHeight / 2 - playerHeight / 2;

    playerL.style.transform = `translateY(${playerInitPosition}px)`;
    playerR.style.transform = `translateY(${playerInitPosition}px)`;
    ball.style.transform = `translate(${fieldWidth / 2 - ballSize / 2}px, ${fieldHeight / 2 - ballSize / 2}px)`;

    setTimeout(() => {
      field.style.opacity = '1';
      // ball.style.transform = `translate(${-10}px, ${300}px)`;
    }, 1000);

    setTimeout(() => {
      animationId = startAnimation();
    }, 1500);
  };

  export default init;