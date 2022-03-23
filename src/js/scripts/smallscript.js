// * Этот файл для очень маленького кода
// * для которого не стоит делать отдельный файл.

// ! Измение свойсва flex для карточек для .about-cards в файле _about.scss(22ст)- {

let aboutCardsColumn = document.querySelectorAll(".about-cards__column");

let aboutCardsElementsCount = aboutCardsColumn.length;


aboutCardsColumn.forEach(el => {
    switch (aboutCardsElementsCount) {
        case 2:
            el.style.flex = "0 1 50%";
            break;

        case 3:
            el.style.flex = "0 1 33.333%";
            break;

        case 4:
            el.style.flex = "0 1 25%";
            break;

        case 5:
            el.style.flex = "0 1 20%";
            break;
    }
});


// ! Измение свойсва flex для карточек в about-cards- }