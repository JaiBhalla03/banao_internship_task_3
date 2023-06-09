function decreaseStrokeOffset() {
    // Get the progressCircle element
    const progressCircle = document.getElementById("Opaque_Ring");

    // Calculate the increment value
    const decrement = Math.floor(1000 / 7);

    // Get the height of 100vh
    const vhHeight = window.innerHeight;

    // Calculate the scroll position at 100vh
    const scrollPosition = vhHeight;

    // Calculate the number of times the scroll position fits in the window height
    const scrollCount = Math.round(window.scrollY / scrollPosition);

    // Calculate the new strokeDashoffset value
    const newStrokeOffset = 1000 - decrement * scrollCount;

    // Apply the new strokeDashoffset value to the progressCircle
    progressCircle.style.strokeDashoffset = newStrokeOffset + "px";
    progressCircle.style.transition = "stroke-dashoffset 0.3s linear";
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');
    const dot4 = document.querySelector('.dot4');
    const dot5 = document.querySelector('.dot5');
    const dot6 = document.querySelector('.dot6');
    const dot7 = document.querySelector('.dot7');
    if(scrollCount === 0){
        dot2.style.fill = 'rgb(0, 146, 255)';
        dot3.style.fill = 'rgb(0, 146, 255)';
        dot4.style.fill = 'rgb(0, 146, 255)';
        dot5.style.fill = 'rgb(0, 146, 255)';
        dot6.style.fill = 'rgb(0, 146, 255)';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 1){
        dot2.style.fill = 'white';
        dot3.style.fill = 'rgb(0, 146, 255)';
        dot4.style.fill = 'rgb(0, 146, 255)';
        dot5.style.fill = 'rgb(0, 146, 255)';
        dot6.style.fill = 'rgb(0, 146, 255)';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 2){
        dot2.style.fill = 'white';
        dot3.style.fill = 'white';
        dot4.style.fill = 'rgb(0, 146, 255)';
        dot5.style.fill = 'rgb(0, 146, 255)';
        dot6.style.fill = 'rgb(0, 146, 255)';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 3){
        dot2.style.fill = 'white';
        dot3.style.fill = 'white';
        dot4.style.fill = 'white';
        dot5.style.fill = 'rgb(0, 146, 255)';
        dot6.style.fill = 'rgb(0, 146, 255)';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 4){
        dot2.style.fill = 'white';
        dot3.style.fill = 'white';
        dot4.style.fill = 'white';
        dot5.style.fill = 'white';
        dot6.style.fill = 'rgb(0, 146, 255)';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 5){
        dot2.style.fill = 'white';
        dot3.style.fill = 'white';
        dot4.style.fill = 'white';
        dot5.style.fill = 'white';
        dot6.style.fill = 'white';
        dot7.style.fill = 'rgb(0, 146, 255)';
    }
    if(scrollCount === 6){
        dot2.style.fill = 'white';
        dot3.style.fill = 'white';
        dot4.style.fill = 'white';
        dot5.style.fill = 'white';
        dot6.style.fill = 'white';
        dot7.style.fill = 'white';
    }
}

// Attach the function to the scroll event
window.addEventListener("scroll", decreaseStrokeOffset);


//dealing with the dots
const dot1 = document.querySelector('.dot1');
dot1.style.fill = 'white';

// JavaScript for manual navigation
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 0;

const manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual;
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
    });
});

// JavaScript for swipe navigation
const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('div');
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());

    // Touch events
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    // Mouse events
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mousemove', touchMove);
    slide.addEventListener('mouseleave', touchEnd);
});

// Disable context menu on slider
slider.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function touchStart(index) {
    return function(event) {
        currentSlide = index;
        startPos = getPositionX(event);
        isDragging = true;

        // Stop autoplay
        clearInterval(animationID);
    }
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentSlide < slides.length - 1) {
        currentSlide += 1;
    }
    if (movedBy > 100 && currentSlide > 0) {
        currentSlide -= 1;
    }
    setPositionByIndex();

    // Restart autoplay
    startAutoplay();
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setPositionByIndex() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
            btns[index].classList.add('active');
        } else {
            slide.classList.remove('active');
            btns[index].classList.remove('active');
        }
    });

    slider.style.transform = `translateX(${currentSlide * -100}%)`;
}

function startAutoplay() {
    animationID = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        setPositionByIndex();
    }, 10000);
}

// Initialize slider
setPositionByIndex();
startAutoplay();
