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


//dealing with carousel
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//javascriot for manual navigation

const manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    })
})

//js for the autoplay of the slider
const repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    const repeater = ()=>{
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            })
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length === i){
                i =0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();