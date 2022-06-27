// Toggle nav
const toggleBtn = document.querySelector('.toggle-btn');
const toggleNav = document.querySelector('.toggle-nav');
const closeBtn = document.querySelector('.close');

toggleBtn.addEventListener('click', function(){
    toggleNav.classList.toggle('active');
});
closeBtn.addEventListener('click', function(){
    if(toggleNav.classList.contains('active')){
        toggleNav.classList.remove('active');
    }
});

// Service Carousel
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const leftBtn = document.getElementById('left-arrow');
const rightBtn = document.getElementById('right-arrow');
const controlBtns = document.querySelectorAll('.control-bar');
const carouselItems = document.querySelectorAll('.carousel-item');

leftBtn.addEventListener('click', function(){
    prevBtn.click();
});
rightBtn.addEventListener('click', function(){
    nextBtn.click();
});

// Our Services
const serviceBtn = document.querySelectorAll('.our-service-item button');
const serviceHoverBox = document.querySelectorAll('.service-hover');
const cleaningIcon = document.querySelectorAll('.cleaning-icon');
const serviceImgBox = document.querySelectorAll('.service-img-box');

for(let i = 0; i < serviceBtn.length; i++){
    serviceBtn[i].addEventListener('mouseover', function(){
        const id = this.getAttribute('data-id');
        console.log(id);
        const currentHoverBox = serviceHoverBox[id];
        const currentCleaningIcon = cleaningIcon[id];
        const currentImgBox = serviceImgBox[id];
        currentHoverBox.classList.add('active');
        currentCleaningIcon.classList.add('active');
        currentImgBox.classList.add('active');
    });
    serviceBtn[i].addEventListener('mouseout', function(){
        for(let j = 0; j < serviceHoverBox.length; j++){
            serviceHoverBox[j].classList.remove('active');
            cleaningIcon[j].classList.remove('active');
            serviceImgBox[j].classList.remove('active');
        }
    });
}

// Footer
const footerBtn = document.querySelector('.footer-item button');
const footerBtnArrow = document.querySelector('.footer-item button i');
footerBtn.addEventListener('mouseover', function(){
    footerBtnArrow.style.marginLeft = '12px';
});
footerBtn.addEventListener('mouseout', function(){
    footerBtnArrow.style.marginLeft = '5px';
});