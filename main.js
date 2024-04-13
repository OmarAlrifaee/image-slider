// get images and convert to array
const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
const slidesCount = sliderImages.length;
// get indicators container
const indicatorsContainer = document.getElementById("indicators");

// set current index
let currentSlide = 1;

// get slide number sting element
const slideNumberElemenet = document.getElementById("slide-number");

// prev and next buttons click event
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// hundel click on prev and next buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// create the main ul element
const indicatorsElemenet = document.createElement("ul");
indicatorsElemenet.id = "indicators-ul";
// create li's based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // create li's
  const indicatorsItems = document.createElement("li");
  // set data index
  indicatorsItems.dataset.index = i;
  // set item content
  indicatorsItems.innerHTML = i;
  // add to the ul
  indicatorsElemenet.append(indicatorsItems);
}
// add list to the indicators container
indicatorsContainer.append(indicatorsElemenet);

// get the new created ul
const indicatorsCreatedElemenet = document.getElementById("indicators-ul");
// make a array from lis to remove the active class's from them before add new active on the current li
const indicatorsLis = Array.from(
  document.querySelectorAll("#indicators-ul li")
);

// hudel bullets click event
indicatorsLis.forEach((li) => {
  li.addEventListener("click", () => {
    // the pars cuz the innerHTML ganna be string so i converted it to number
    currentSlide = parseInt(li.innerHTML);
    checker();
  });
});

// trigger the checker function to show the first image before you click
checker();

// next slide function
function nextSlide() {
  currentSlide++;
  checker();
}

// prev slide funtion
function prevSlide() {
  currentSlide--;
  checker();
}

// create the checker function
function checker() {
  // set the slide number
  slideNumberElemenet.innerHTML = `slide ${currentSlide} of ${slidesCount}`;
  // remove all active class's from the images and li's
  removeActives();
  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // set active class indicators Created item
  indicatorsCreatedElemenet.children[currentSlide - 1].classList.add("active");

  // check if curaant slide is the first
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  // check if curaant slide is the last
  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and bullets
function removeActives() {
  // remove the active class's from all the images and the li's
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  indicatorsLis.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
