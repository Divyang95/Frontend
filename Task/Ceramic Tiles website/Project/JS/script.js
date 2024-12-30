const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

function updateCarousel(index){
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function showNextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
}

function showPrevSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex)
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateCarousel(currentIndex);
    });
});


//Autoslider stops when mouseover and when not over it stops
let autoSlider1Interval = setInterval(showNextSlide, 5000);

document.querySelector('.row1').addEventListener('mouseover', () => {
    clearInterval(autoSlider1Interval);
})

document.querySelector('.row1').addEventListener('mouseout', () => {
    autoSlider1Interval = setInterval(showNextSlide, 5000)
})





const slides2 = document.querySelectorAll(".slide21");
const prevBtn = document.querySelector(".wt-btn-prev");
const nextBtn = document.querySelector(".wt-btn-next");
const numberBtns = [document.querySelector(".wt-number1"), document.querySelector(".wt-number2")];




let currentSlideIndex = 0;

//Functions to display the active slide
function showSlide(index){
    slides2.forEach((slide,i)=> {
        slide.style.display = i === index ? "flex" : "none"; //show the active slide 
        slide.classList.toggle('active', i === index);
    })
}




//show the next slide 
function nextSlide(){
    currentSlideIndex = (currentSlideIndex + 1) % slides2.length;
    showSlide(currentSlideIndex);

}


//Show the previous slide 
function prevSlide(){
    currentSlideIndex = (currentSlideIndex -1 + slides2.length) % slides2.length;
    showSlide(currentSlideIndex);
}

//Go to specific sldie (number button)
function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

//Event Listeners for navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

numberBtns.forEach((button,index) => {
    button.addEventListener('click', () => goToSlide(index));
});

showSlide(currentSlideIndex);


// all about floor wall slider r3
const slidesr3 = document.querySelectorAll(".slide31");
const prevBtnr3 = document.querySelector(".wt-btn-prevr3");
const nextBtnr3 = document.querySelector(".wt-btn-nextr3");
const numberBtnsr3 = [document.querySelector(".wt-number1r3"), document.querySelector(".wt-number2r3")];

//Function for row3 floor slide
function showSlider3(index){
    slidesr3.forEach((slide,i)=>{
        slide.style.display = i === index ? "flex" : "none";
        slide.classList.toggle("active", i === index);
    })
}

//show the next slide 
function nextSlider3(){
    currentSlideIndex = (currentSlideIndex + 1) % slides2.length;
    showSlider3(currentSlideIndex);
}

//Show the previous slide 
function prevSlider3(){
    currentSlideIndex = (currentSlideIndex -1 + slides2.length) % slides2.length;
    showSlider3(currentSlideIndex);
}

//Go to specific sldie (number button)
function goToSlider3(index) {
    currentSlideIndex = index;
    showSlider3(currentSlideIndex);
}

//Event Listeners for navigation buttons
prevBtnr3.addEventListener('click', prevSlider3);
nextBtnr3.addEventListener('click', nextSlider3);

numberBtnsr3.forEach((button,index) => {
    button.addEventListener('click', () => goToSlider3(index));
});


showSlider3(currentSlideIndex);

const slidesr4 = document.querySelectorAll(".slide41");
const prevbtnr4 = document.querySelector(".prev-btnr4");
const nextbtnr4 = document.querySelector(".next-btnr4");
const btn01r4 = document.querySelector(".btnr4-01");
const btn02r4 = document.querySelector(".btnr4-02");

//Track Slides 
let currentSlider4 = 0;

//update carousel to display the correct slide 
function updateSlidesr4(){
    slidesr4.forEach((slide,index) => {
        slide.style.transform = `translateX(${(index - currentSlider4)*100}%)`;
    })

    // Update button active states
    btn01r4.classList.toggle('active', currentSlider4 === 0);
    btn02r4.classList.toggle('active', currentSlider4 === 1);



}



//Navigate to the next slide
function nextSlider4() {
    currentSlider4 = (currentSlider4 + 1 ) % slidesr4.length;
    updateSlidesr4();
}


//Navigate to the previous Slide 
function prevSlider4() {
    currentSlider4 = (currentSlider4 - 1 + slidesr4.length) % slidesr4.length;
    updateSlidesr4();
}

//Navigate to a specific slide (based on button click)
function goToSlider4(slideIndex){
    currentSlider4 = slideIndex;
    updateSlidesr4(); 
}

//Add Eventlisteners for buttons 
nextbtnr4.addEventListener('click', nextSlider4);
prevbtnr4.addEventListener('click', prevSlider4);

btn01r4.addEventListener('click', () => goToSlider4(0));
btn02r4.addEventListener('click',() => goToSlider4(1));


//Autoslide functionality 
let autoSlider4Interval = setInterval(nextSlider4, 5000); //Automatically slides every 5 seconds 

//pause auto-slide on hover 
document.querySelector('.r4carowrapper').addEventListener('mouseover', () => {
    clearInterval(autoSlider4Interval); //stop auto slide
})

document.querySelector('.r4carowrapper').addEventListener('mouseout', () => {
    autoSlider4Interval = setInterval(nextSlider4, 5000);
})

//Initialize the carousel
updateSlidesr4();