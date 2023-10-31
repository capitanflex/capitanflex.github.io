let countPartnerSlides = 7;
let sliderContainer;

$(document).ready(function() {

    startSliderProperty();
    setSliderProperty();
    changePartnerCount();
    checkHideOrShowArrows();

});

window.addEventListener('resize', changePartnerCount);

function changePartnerCount() {
    sliderContainer = document.querySelector('.slick-list.draggable');
    const screenWidth = sliderContainer.offsetWidth;
    const breakpoints = [ 320,  450,  700,  950];
    
    for (let i = 0; i < breakpoints.length; i++) {
        if (screenWidth <= breakpoints[i]) {
            countPartnerSlides = i*2 + 1;
            setSliderProperty();
            checkHideOrShowArrows()
            break;
        }
    }
}

function checkHideOrShowArrows() {
    const screenWidth = window.innerWidth;;
    console.log(screenWidth)
    if (countPartnerSlides >= 7 || screenWidth <= 750) {
        hidePartnersArrows();
    }
    else{
        showPartnersArrows();
    }
}

function hidePartnersArrows() {
    const arrows = [...document.getElementsByClassName('slick-arrow')];
    arrows.forEach(element => {
        element.style.display = 'none';
    });
}
function showPartnersArrows() {
    const arrows = [...document.getElementsByClassName('slick-arrow')];
    arrows.forEach(element => {
        element.style.display = 'block';
    });
}


function startSliderProperty(){
    $('.slider').slick({
        slidesToShow: countPartnerSlides,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });
}
function setSliderProperty(){
    $('.slider').slick('slickSetOption', 'slidesToShow', countPartnerSlides);
}