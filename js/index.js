/**
 * Created by spicecowboy on 28.01.17.
 */
/*------ПЕРЕМЕННЫЕ------*/

/*--MOBILE NAV-MENU--*/
var MMheader = document.querySelector('.page-header');
var MMtoggle = MMheader.querySelector('.page-header__menu-toggle');
var MMnav = MMheader.querySelector('.main-nav');
/*--REVIEWS SLIDER--*/
var RSitem1 = document.querySelector('.js-RSitem1');
var RSitem2 = document.querySelector('.js-RSitem2');
var RSitem3 = document.querySelector('.js-RSitem3');
var RSpag1 = document.querySelector('.js-RSpag1');
var RSpag2 = document.querySelector('.js-RSpag2');
var RSpag3 = document.querySelector('.js-RSpag3');

/*--PRICES SLIDER--*/
var PStable = document.querySelector('.prices-slider__table');
var PSpag1 = document.querySelector('.js-PSpag1');
var PSpag2 = document.querySelector('.js-PSpag2');
var PSpag3 = document.querySelector('.js-PSpag3');

/*--DESKTOP REVIEWS SLIDER--*/
var DRSpagL = document.querySelector('.js-DRSpagL');
var DRSpagR = document.querySelector('.js-DRSpagR');

/*------ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ------*/

/*--MOBILE NAV-MENU--*/

function MobileNavMenu(btn, bmod, head, hmod, nav, nmod ) {
    if(!btn.classList.contains(bmod)) {
        btn.classList.add(bmod);
        head.classList.add(hmod);
        nav.classList.add(nmod);
    } else {
        btn.classList.remove(bmod);
        head.classList.remove(hmod);
        nav.classList.remove(nmod);
    }
}

/*--REVIEWS SLIDER--*/

function ReviewsSlider(item1,item2,item3,pag1,pag2,pag3,ItemMod,PagMod) {
    if (!pag1.classList.contains(PagMod)) {
        if (pag2.classList.contains(PagMod)) {
            pag2.classList.remove(PagMod);
            item2.classList.remove(ItemMod);
        } else {
            pag3.classList.remove(PagMod);
            item3.classList.remove(ItemMod);
        }
        pag1.classList.add(PagMod);
        item1.classList.add(ItemMod);
    }
}

/*--PRICES SLIDER--*/

function PricesSlider(table, pag1, pag2, pag3, tmod1 ,tmod2, tmod3, PagMod) {
    if (!pag1.classList.contains(PagMod)) {
        if (pag2.classList.contains(PagMod)) {
            pag2.classList.remove(PagMod);
            table.classList.remove(tmod2)
        } else {
            pag3.classList.remove(PagMod);
            table.classList.remove(tmod3)
        }
        pag1.classList.add(PagMod);
        table.classList.add(tmod1);
    }
}

/*--DESKTOP REVIEWS SLIDER--**/

function DesktopReviewsSlider(item1, item2, item3, ItemMod) {
    if (item1.classList.contains(ItemMod)) {
        item1.classList.remove(ItemMod);
        item2.classList.add(ItemMod);
    } else if (item2.classList.contains(ItemMod)) {
        item2.classList.remove(ItemMod);
        item3.classList.add(ItemMod);
    } else {
        item3.classList.remove(ItemMod);
        item1.classList.add(ItemMod);
    }
}


/*------ТЕЛО------*/

/*--MOBILE NAV-MENU--*/

MMtoggle.addEventListener('click', function (event) {
    event.preventDefault();
    MobileNavMenu(MMtoggle, 'page-header__menu-toggle--close', MMheader, 'page-header--mobile-menu',
    MMnav, 'main-nav--active')
});

/*--REVIEWS SLIDER--*/

RSpag1.addEventListener('click', function () {
    ReviewsSlider(RSitem1, RSitem2, RSitem3, RSpag1, RSpag2, RSpag3, 'reviews-slider__item--active',
    'reviews-slider__pagination-item--active')
});

RSpag2.addEventListener('click', function () {
    ReviewsSlider(RSitem2, RSitem1, RSitem3, RSpag2, RSpag1, RSpag3, 'reviews-slider__item--active',
        'reviews-slider__pagination-item--active')
});

RSpag3.addEventListener('click', function () {
    ReviewsSlider(RSitem3, RSitem1, RSitem2, RSpag3, RSpag1, RSpag2, 'reviews-slider__item--active',
        'reviews-slider__pagination-item--active')
});

/*--PRICES SLIDER--*/

PSpag1.addEventListener('click', function () {
    PricesSlider(PStable, PSpag1, PSpag2, PSpag3, 'prices-slider__table--left',
        'prices-slider__table--center', 'prices-slider__table--right',
    'prices-slider__pagination-item--active')
});

PSpag2.addEventListener('click', function () {
    PricesSlider(PStable, PSpag2, PSpag1, PSpag3, 'prices-slider__table--center',
        'prices-slider__table--left', 'prices-slider__table--right',
        'prices-slider__pagination-item--active')
});

PSpag3.addEventListener('click', function () {
    PricesSlider(PStable, PSpag3, PSpag1, PSpag2, 'prices-slider__table--right',
        'prices-slider__table--left', 'prices-slider__table--center',
        'prices-slider__pagination-item--active')
});

/*--DESKTOP REVIEWS SLIDER--*/

DRSpagR.addEventListener('click', function () {
    DesktopReviewsSlider(RSitem1, RSitem2, RSitem3, 'reviews-slider__item--active')
});

DRSpagL.addEventListener('click', function () {
    DesktopReviewsSlider(RSitem1, RSitem3, RSitem2, 'reviews-slider__item--active')
});