const sliderContainer3 = document.querySelector('.slider-container3')
const slideRight3 = document.querySelector('.right-slide3')
const slideLeft3 = document.querySelector('.left-slide3')
const upButton3 = document.querySelector('.up-button3')
const downButton3 = document.querySelector('.down-button3')
const slidesLengthh = slideRight3.querySelectorAll('div').length

let activeSlideIndex = 0




upButton3.addEventListener('click', () => changeSlide('up'))
downButton3.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
 const sliderHeight = sliderContainer3.clientHeight

   if(direction ==='up3') {
       console.log("up called");
       activeSlideIndex++
       if(activeSlideIndex > slidesLengthh - 1){
           activeSlideIndex = 0
       }

   } else if(direction  ==='down3'){
        console.log("down called");
       activeSlideIndex--
       if(activeSlideIndex < 0 ) {
           activeSlideIndex = slidesLengthh - 1
       }
   }

   slideRight3.style.transform = `translateY(-${activeSlideIndex * 
   sliderHeight}px)`
   slideLeft3.style.transform = `translateY(${activeSlideIndex * 
       sliderHeight}px)` 

   }



 



































