(function () {
  const slider = document.querySelector(".slider");
  let sliderItem = slider.querySelectorAll(".slider-item");
  const sliderBtns = slider.querySelector(".btns");
  const sliderWrapper = document.querySelector(".slider-item-wrapper");

  let currentIdx = 0;
  let sliderLength = sliderItem.length;
  let timer;

  //slider item clone
  let firstChild = sliderWrapper.firstElementChild;
  let lastChild = sliderWrapper.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  sliderWrapper.append(clonedFirst);
  sliderWrapper.prepend(clonedLast);
  //변수 재할당
  sliderItem = slider.querySelectorAll(".slider-item");
  sliderLength = sliderItem.length;

  //수평 정렬
  for (let i = 0; i < sliderLength; i++) {
    sliderItem[i].style.left = i * 100 + "%";
  }

  function moveToslider(IdxNum) {
    sliderWrapper.style.transform =
      "translate3D(" + -100 * (currentIdx + 1) + "%, 0, 0)";
    currentIdx = IdxNum;
  }

  function goToSlider() {
    moveToslider(currentIdx);
    sliderWrapper.classList.add("animate-slider");
  }

  function returnToSlider() {
    moveToslider(currentIdx);
    sliderWrapper.classList.remove("animate-slider");
  }

  function goToPrev() {
    if (currentIdx > -1) {
      currentIdx--;
      goToSlider();
    }
    if (currentIdx === -1) {
      setTimeout(function () {
        currentIdx = 5;
        returnToSlider();
      }, 301);
    }
  }

  function goToNext() {
    if (currentIdx < sliderLength - 2) {
      currentIdx++;
      goToSlider();
    }
    if (currentIdx === sliderLength - 2) {
      setTimeout(function () {
        currentIdx = 0;
        returnToSlider();
      }, 301);
    }
  }

  function btnsClickHandler(e) {
    const targetBtn = e.target;

    if (targetBtn.classList.contains("btn-prev")) {
      goToPrev();
      console.log(currentIdx);
    }
    if (targetBtn.classList.contains("btn-next")) {
      goToNext();
      console.log(currentIdx);
    }
  }

  function autoSlider() {
    timer = setInterval(goToNext, 3000);
  }
  function stopSlider() {
    clearInterval(timer);
  }

  moveToslider(0);
  autoSlider();
  sliderBtns.addEventListener("click", btnsClickHandler);
  slider.addEventListener("mouseenter", stopSlider);
  slider.addEventListener("mouseleave", autoSlider);
})();
