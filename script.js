// about pages slider
// Select all the slides
// return all kinds of slide in array format
let sliderImages=document.querySelectorAll('.slide'),
    arrowRight=document.querySelector('#arrow-right'),
    arrowLeft=document.querySelector('#arrow-left'),
    current=0;

    // clear all the images to display none
    // delete all
    function reset(){
      for(let i=0;i<sliderImages.length;i++){
        sliderImages[i].style.display='none';
      }
    }

    // before startslide it needs to reset 
    // and starts the first slides.
    function startSlide(){
      reset();
      sliderImages[0].style.display='block';
    }
    
    // slide left

    function slideLeft(){
      reset();
      sliderImages[current -1].style.display='block';
      current--;
    }
    
    startSlide();

    // Left arrow click
    // need eventlistener to run
    arrowLeft.addEventListener("click",function(){
      if(current===0){
        current=sliderImages.length;
      }
      slideLeft();
    });

    function slideRight(){
      reset();
      sliderImages[current +1].style.display="block";
      current++;
    }


    arrowRight.addEventListener("click",function(){
      if(current===sliderImages.length -1){
        current=-1;
      }
      slideRight();
    });


    function scrollToForm() {
      document.querySelector('#menu').scrollIntoView({behavior: 'smooth'});
    }
