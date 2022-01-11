// app // 

let sliderContainer = document.querySelector('.slider-container');
let slideRight = document.querySelector('.right-slide');
let slideLeft = document.querySelector('.left-slide');
let upButton = document.querySelector('.up-button');
let downButton = document.querySelector('.down-button');
let slidesLength = slideRight.querySelectorAll('div').length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;


upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

let changeSlide = (direction) => {
    let sliderHeight = sliderContainer.clientHeight;

   if(direction ==='up') {
       console.log("up called");
       activeSlideIndex++
       if(activeSlideIndex > slidesLength - 1){
           activeSlideIndex = 0;
       }

   } else if(direction  ==='down'){
        console.log("down called");
       activeSlideIndex--;
       if(activeSlideIndex < 0 ) {
           activeSlideIndex = slidesLength - 1;
       }
   }

   slideRight.style.transform = `translateY(-${activeSlideIndex * 
   sliderHeight}px)`;
   slideLeft.style.transform = `translateY(${activeSlideIndex * 
       sliderHeight}px)`; 

   }




   // graphic // 

   let Container = document.querySelector('.container');
   let sideRight = document.querySelector('.right-side');
   let sideLeft = document.querySelector('.left-side');
   let upBtn = document.querySelector('.up-btn');
   let downBtn = document.querySelector('.down-btn');
   let sidesLength = sideRight.querySelectorAll('div').length
   
   
   let activeSideIndex = 0
   
   sideLeft.style.top = `-${(sidesLength - 1) * 100}vh`;
   
   
   upBtn.addEventListener('click', () => changeSide('upper'));
   downBtn.addEventListener('click', () => changeSide('downer'));
   
   let changeSide = (direction) => {
       let siderHeight = Container.clientHeight;
   
      if(direction ==='upper') {
          console.log("up called");
          activeSideIndex++
          if(activeSideIndex > sidesLength - 1){
              activeSideIndex = 0;
          }
   
      } else if(direction  ==='downer'){
           console.log("down called");
          activeSideIndex--;
          if(activeSideIndex < 0 ) {
              activeSideIndex = sidesLength - 1;
          }
      }
   
      sideRight.style.transform = `translateY(-${activeSideIndex * 
      siderHeight}px)`;
      sideLeft.style.transform = `translateY(${activeSideIndex * 
          siderHeight}px)`; 
   
      }
   
   


 // web // 
      
   let slider = document.querySelector('.slider');
   let rightSide = document.querySelector('.rightside');
   let leftSide = document.querySelector('.leftside');
   let upBttn = document.querySelector('.upbttn');
   let downBttn = document.querySelector('.downbttn');
   let sideLength = rightSide.querySelectorAll('div').length
   
   
   let activesSideIndex = 0
   
   leftSide.style.top = `-${(sideLength - 1) * 100}vh`;
   
   
   upBttn.addEventListener('click', () => changesSide('uppor'));
   downBttn.addEventListener('click', () => changesSide('downey'));
   
   let changesSide = (direction) => {
       let sideHeight = slider.clientHeight;
   
      if(direction ==='uppor') {
          console.log("up called");
          activesSideIndex++
          if(activesSideIndex > sideLength - 1){
              activesSideIndex = 0;
          }
   
      } else if(direction  ==='downey'){
           console.log("down called");
          activesSideIndex--;
          if(activesSideIndex < 0 ) {
              activesSideIndex = sideLength - 1;
          }
      }
   
      rightSide.style.transform = `translateY(-${activesSideIndex * 
      sideHeight}px)`;
      leftSide.style.transform = `translateY(${activesSideIndex * 
          sideHeight}px)`; 
   
      }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   




































