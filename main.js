
// variables
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const animateBg = document.querySelector(".gradient-bg")
const boxMessage = document.querySelector(".message")
const boxMessageText = document.querySelector(".message p")

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let mathRandom = Math.round(Math.random() * 10)

// function callback
const handleTryCLick = (e) => {
  console.log(mathRandom)
  
  switch (mathRandom) {
    case 0:
    boxMessageText.innerHTML = "O segredo da felicidade está em fazer o que você ama."
    break;
    case 1:
    boxMessageText.innerHTML = "Grandes realizações começam com pequenos passos."
    break;
    case 2:
    boxMessageText.innerHTML = "Acredite em si mesmo e tudo será possível."
    break;
    case 3:
    boxMessageText.innerHTML = "A sorte favorece os corajosos."
    break;
    case 4:
    boxMessageText.innerHTML = "A vida é uma aventura, aproveite cada momento."
    break;
    case 5:
    boxMessageText.innerHTML = "Seja a mudança que você deseja ver no mundo."
    break;
    case 6:
    boxMessageText.innerHTML = "A gratidão transforma o comum em extraordinário."
    break;
    case 7:
    boxMessageText.innerHTML = "O sucesso vem para aqueles que trabalham duro e nunca desistem."
    break;
    case 8:
    boxMessageText.innerHTML = "Siga seus sonhos, eles conhecem o caminho."
    break;
    case 9:
    boxMessageText.innerHTML = "As oportunidades estão sempre ao nosso redor, basta estarmos atentos."
    break;
    case 10:
    boxMessageText.innerHTML = "O maior poder está em ser gentil."
    break;
    
    default:
    break;
  }
  
  hidePagesToggle()
  
}

const resetPage = () => {
  hidePagesToggle()
  
  
}

const hidePagesToggle = () => {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  animateBg.classList.toggle("hide")
  boxMessage.classList.toggle("active-message")
  mathRandom = Math.round(Math.random() * 10)
}

// events
btnTry.addEventListener('click', handleTryCLick)
btnReset.addEventListener('click', resetPage)
document.addEventListener('keydown', function (e) {
  if (e.key === "Enter")
  handleTryCLick()
} )

// animateBG
document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;
  
  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }
  
  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });
  
  move();
})






