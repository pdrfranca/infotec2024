var merchandising = document.querySelector('.merchandising');

var position = -27;
var speed = 0.05;

function updatePosition() {
  position += speed;

  if (position > 27) {
    position = -26;
  }
  
  merchandising.style.transform = 'translateX(' + position + 'vw)';
  requestAnimationFrame(updatePosition);
}
requestAnimationFrame(updatePosition);

document.addEventListener( 'DOMContentLoaded', function () {
  var splide1 = new Splide( '#thumbnail-slider', {
    fixedWidth : 480,
    fixedHeight: 530,
    type: 'loop',
    gap        : 5,
    rewind     : true,
    pagination : false,
    cover      : true,
    focus      : 'center',
    isNavigation: true,
    autoplay: 'playing',
    pauseOnHover: false,
    lazyload: 'loaded',
    breakpoints: {
      800: {
          // configurações para telas menores que 600px
          perPage: 3,
          autoWidth: true,
          lazyload: false,
      }
  }
  } 
  ).mount();


  document.querySelector('.splide__arrow--next').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>';

  document.querySelector('.splide__arrow--prev').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>';
})


let index1 = 0;
const flexCard = document.querySelector('.flexCard');
const percentages = [104, 0, -104];

function updateCards() {
  if (window.innerWidth <= 800) {
    flexCard.style.transform = `translateX(${percentages[index1]}vw)`;
    index1 = (index1 + 1) % 3; // Atualiza o índice para o próximo ciclo
  }
}

updateCards(); // Chama a função uma vez para iniciar

setInterval(updateCards, 3000); // Atualiza os cartões a cada 3 segundos

window.onload = function() {
  var alunos = Array.from(document.querySelectorAll('.geralAlunos'));
  var selectors = document.getElementById('selectors');
  var currentIndex = 0;

  // Crie os seletores de slides
  alunos.forEach(function(aluno, index) {
    var selector = document.createElement('div');
    selector.classList.add('selector');
    selector.addEventListener('click', function() {
      currentIndex = index;
      changeAluno();
    });
    selectors.appendChild(selector);
  });

  function changeAluno() {
    alunos.forEach(function(aluno, index) {
      if (index === currentIndex) {
        aluno.classList.add('active');
        selectors.children[index].classList.add('active');
      } else {
        aluno.classList.remove('active');
        selectors.children[index].classList.remove('active');
      }
    });
  }

  changeAluno();

  setInterval(function() {
    currentIndex = (currentIndex + 1) % alunos.length;
    changeAluno();
  }, 5000);
};








  