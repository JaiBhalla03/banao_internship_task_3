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


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
    // autoplay:{
    //     delay: 5000
    // }
});
