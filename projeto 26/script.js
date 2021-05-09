const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = slideRight.querySelectorAll('div').length;

let activeSliderIndex = 0;
slideLeft.style.top = `-${slidesLenght - 1 * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
   const sliderHeight = slideContainer.clientHeight
   if(direction === 'up'){
      activeSliderIndex++
      if(activeSliderIndex > slidesLenght - 1){
         activeSliderIndex = 0
      }
   }

   slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
}
