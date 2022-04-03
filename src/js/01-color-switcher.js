
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const spanEl = document.querySelector('.color');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');



buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.background = color;;
    }, 1000);
    buttonStart.setAttribute('disabled','disabled');
    // console.log(buttonStart);
});

buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    buttonStart.removeAttribute('disabled');
});

