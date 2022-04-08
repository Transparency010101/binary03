// * Этот файл для очень маленького кода
// * для которого не стоит делать отдельный файл.

// * Измение свойсва flex для карточек для .about-cards в файле _about.scss(22ст)- {
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
// * Измение свойсва flex для карточек в about-cards- }


// * фильтр картинок в portfolio  {
const portfolioDataFilterLink = document.querySelectorAll(".portfolio-data-filter__link");
const portfolioGridColumn = document.querySelectorAll(".portfolio-grid__column");

function toggleClassToFilter(filterClass) {
    filterClass.classList.toggle("active");
}

portfolioDataFilterLink.forEach(el => {
    el.addEventListener("click", (event) => {
        // $ console.log(el.getAttribute("data-filter"));

        portfolioGridColumn.forEach(classEl => {
            if (el.getAttribute("data-filter") == 1) {
                classEl.classList.remove("active");

            } else if (el.getAttribute("data-filter") == 2) {

                if (classEl.classList.contains("filter_2")) {
                    toggleClassToFilter(classEl);
                }

            } else if (el.getAttribute("data-filter") == 3) {

                if (classEl.classList.contains("filter_3")) {
                    toggleClassToFilter(classEl);
                }

            } else if (el.getAttribute("data-filter") == 4) {

                if (classEl.classList.contains("filter_4")) {
                    toggleClassToFilter(classEl);
                }
            }
        });
        event.preventDefault();
    });
});
// * фильтр для portfolio  }