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


const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    exactWidth: false,
    dots: '.glider-dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    },
    responsive: [
        {
            breakpoint: 768, // Adjust the breakpoint value as needed
            settings: {
                draggable: true,
                dots: '.glider-dots',
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next',
                },
            },
        },
    ],
});


//understanding how to figure out the scroll for desktop
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const colorIndex = Math.floor(scrollPosition / window.innerHeight); // Calculate the color index based on scroll position
    const headingIndex = Math.floor(scrollPosition/window.innerHeight);
    //array for the different color in the section1
    const colors = ['#202052', '#0f0f25', '#3636a8', '#8836af', '#4e8de1','#202052', ' #41693a'];
    //array for the different inner-text in the section1
    const heading = ['ABC 456', 'ABC 345', 'ABC 234', 'ABC 123', 'ABC 567', 'ABC 678', 'ABC 23478'];
    const text1_array = ['Redefining', 'Powered By advance', 'The next big', '', 'Text headline', 'Developing ERP solution for', 'Biggest Classified'];
    const text2_array = ['UX strategy', 'NASA', 'Blockchain', '25M+ Downloads', 'Text headline','Text headline', 'East Asia'];
    const text3_array = ['and UI design', 'algorithms', 'revolution', 'an appstore & google playStore', 'Footer headline', 'in furniture industry', 'Countries'];
    const fixedScroll = document.querySelector('.scroll');
    const fixedSectionOne = document.querySelector('.section1');
    const sectionTwo = document.querySelector('.section2');
    const textHeading = document.querySelector('.text-heading');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const text3 = document.querySelector('.text3');

    fixedScroll.style.backgroundColor = colors[colorIndex]; // Set the background color based on the color index
    fixedSectionOne.style.backgroundColor = colors[colorIndex]
    textHeading.innerText = heading[headingIndex];
    text1.innerText = text1_array[headingIndex];
    text2.innerText = text2_array[headingIndex];
    text3.innerText = text3_array[headingIndex];
});



//handling the animation of the images
const controller = new ScrollMagic.Controller();

// Create a ScrollMagic scene for imagePage1-lowerLeft

//animation on the images on the page 1

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage1-lowerLeft', { y: '-100%',  duration: 0.5 }))
    .addTo(controller);

// Create a ScrollMagic scene for imagePage1-upperRight
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage1-upperRight', { x: '100%', duration: 0.5  }))
    .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage1-lowerRight', { y: '-100%', duration: 0.5  }))
    .addTo(controller);


const scene4 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage1-upperLeft', { y: '-100%', duration: 0.5  }))
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.trigger-1',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage1-middle', { x: '100%', duration: 0.5  }))
    .addTo(controller);


//animation for the images in the page 2

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.trigger-2',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage2-middle', { y: '100%', duration: 0.5  }))
    .addTo(controller);


const scene7 = new ScrollMagic.Scene({
    triggerElement: '.trigger-2',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage2-upperRight', { y: '-100%', duration: 0.5  }))
    .addTo(controller);


//animation for the images in the page 3

const scene8 = new ScrollMagic.Scene({
    triggerElement: '.trigger-3',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage3-middle', { y: '100%', duration: 0.5 }))
    .addTo(controller);

const scene9 = new ScrollMagic.Scene({
    triggerElement: '.trigger-3',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage3-upperRight', { y: '-100%',  duration: 0.5 }))
    .addTo(controller);


//animation for the images in the page4
const scene10 = new ScrollMagic.Scene({
    triggerElement: '.trigger-4',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage4-left', { x: '100%',  duration: 0.5 }))
    .addTo(controller);

const scene11 = new ScrollMagic.Scene({
    triggerElement: '.trigger-4',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage4-right', { x: '100%',  duration: 0.5 }))
    .addTo(controller);

//animation for the images in the page5
const scene12 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-upperLeft', { x: '-100%',  duration: 0.5 }))
    .addTo(controller);
const scene13 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-lowerLeft', { y: '100%',  duration: 0.5 }))
    .addTo(controller);
const scene14 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-upperMiddle', { y: '-100%',  duration: 0.5 }))
    .addTo(controller);
const scene15 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-lowerMiddle', { y: '100%',  duration: 0.5 }))
    .addTo(controller);
const scene16 = new ScrollMagic.Scene({
    triggerElement: '.trigger-5',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-lowerRight', { x: '100%',  duration: 0.5 }))
    .addTo(controller);

//animation for the images in the page6
const scene17 = new ScrollMagic.Scene({
    triggerElement: '.trigger-6',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage6-middle', { y: '100%',  duration: 0.5 }))
    .addTo(controller);

//animation for the images in the page7
const scene18 = new ScrollMagic.Scene({
    triggerElement: '.trigger-7',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-left', { y: '100%',  duration: 0.5 }))
    .addTo(controller);
const scene19 = new ScrollMagic.Scene({
    triggerElement: '.trigger-7',
    triggerHook: 'onEnter',
    reverse: true
})
    .setTween(gsap.from('.imagePage7-right', { y: '100%',  duration: 0.5 }))
    .addTo(controller);