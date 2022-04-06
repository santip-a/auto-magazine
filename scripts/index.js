// Блок хедара
const header = document.querySelector('.header');
const headerButton = header.querySelector('.header__button');
const headerNavigation = header.querySelector('.header__list');
const headerLogo = header.querySelector('.header__logo');
const headerMenu = header.querySelector('.header__menu');

// Блок галереи
const galleryBlock = document.querySelector('.gallery');
const arrowLeftGallery = galleryBlock.querySelector('.gallery__button_type_back');
const arrowRightGallery = galleryBlock.querySelector('.gallery__button_type_next');
const imageGallery = galleryBlock.querySelector('.gallery__picture');

// Блок ссылок на прессу
const infoBlock = document.querySelector('.info');
const linkInfo = infoBlock.querySelector('.info__link');
const textInfo = infoBlock.querySelector('.info__text-subtitle');
const textAccentuatedInfo = infoBlock.querySelector('.info__text-accent');

// Блок футера
const footerBlock = document.querySelector('.footer');
const buttonFooter = footerBlock.querySelector('.form__button')
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const inputMail = document.getElementById('input-mail');

// объект с адресом картинок
const gallery = ['./images/gallery_1.jpg', './images/gallery_2.jpg', './images/gallery_3.jpg'];

// объект с адресом ссылок, заголовка и текста статьи
const article = {
  drive: {
    link: 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html',
    title: 'Drive.ru: ',
    subtitle: 'Вэн Volkswagen e-Bulli скрестил классику с современной техникой.',
  },
  engadget: {
    link: 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html',
    title: 'Engadget: ',
    subtitle: 'VW’s e-BULLI concept shows how your classic van can become an EV.',
  },
}

let inputsFlag = [true, true, true]; // массив для прверки заполнения полей инпутов
let counterGallery = 0;  // Счетчик для прокрутки галереии


//=====================  ФУНКЦИИ ======================================


// Показывает картинку
function showGallery(elem) {
  imageGallery.setAttribute('src', gallery[elem]);
}

// Показывает текст статьи, устанавливает внешнюю ссылку на статью
function openArticle(key) {
  linkInfo.setAttribute('href', article[key].link);
  textAccentuatedInfo.textContent = (article[key].title);
  textInfo.textContent = (article[key].subtitle);
}

// Проверка заполнения инпутов и смена текста на кнопке ч.2
function checkInput() {
  let trueFalse = true
  inputsFlag.forEach(item => {
    if (item) { trueFalse = false }
  })
  if (trueFalse) { buttonFooter.textContent = 'ГОТОВО!' }
  else { buttonFooter.textContent = 'ПОДПИСКА' }
}

// Проверка заполнения инпута e-mail
function checkEmail (fieldInput) {
  if (fieldInput.value.includes('@')) {
    inputsFlag[2] = led;
  }
  else {
    inputsFlag[2] = true;
  }

}

// Проверка заполнения инпутов и смена текста на кнопке ч.1
function ctrlButton(inputID) {
  led = inputID.value.trim().length === 0;
  if (inputID === inputName) { inputsFlag[0] = led }
  if (inputID === inputSurname) { inputsFlag[1] = led }
  if (inputID === inputMail ) { checkEmail(inputMail)  }
  checkInput()
}


//============== ДЕЙСТВИЯ ========================================


// меняем меню хеадера
headerButton.addEventListener('click', function() {
  headerNavigation.classList.toggle('header__visible');
  headerButton.classList.toggle('header__button_type_mobile');
  headerLogo.classList.toggle('header__logo-hidden');
  headerMenu.classList.toggle('header__menu_mobile');
})


// Нажатие на кнопку "Влево" прокрутки галереии
arrowLeftGallery.addEventListener('click', function () {
  counterGallery -= 1;
  if (counterGallery < 0) {
    counterGallery = (gallery.length) - 1;
  }
  showGallery(counterGallery)
})

// Нажатие на кнопку "Вправо" прокрутки галереии
arrowRightGallery.addEventListener('click', function () {
  counterGallery += 1;
  if (counterGallery > 2) {
    counterGallery = 0;
  }
  showGallery(counterGallery)
})

// Нажатие на кнопку 'radio' в блоке ссылке на прессу
document.querySelectorAll('.info__radio').forEach(item => {
  item.addEventListener('click', function () {
    openArticle(item.getAttribute('id'))
  })
})


// Заполнение полей инпунтов
document.querySelectorAll('.form__input').forEach(item => {
  item.addEventListener('input', function () {
    ctrlButton(item);
  })
})
