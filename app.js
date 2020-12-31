(function () {
  const slider = document.querySelector(".slider");
  let sliderItem = slider.querySelectorAll(".slider-item");
  const sliderBtns = slider.querySelector(".btns");
  const sliderWrapper = document.querySelector(".slider-item-wrapper");

  let currentIdx = 0;
  let sliderLength = sliderItem.length;

  //slider item clone
  let firstChild = sliderWrapper.firstElementChild;
  let lastChild = sliderWrapper.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  sliderWrapper.appendChild(clonedFirst);
  sliderWrapper.insertBefore(clonedLast, sliderWrapper.firstElementChild);

  //변수 재할당
  sliderItem = slider.querySelectorAll(".slider-item");
  sliderLength = sliderItem.length;

  //수평 정렬
  for (let i = 0; i < sliderLength; i++) {
    sliderItem[i].style.left = i * 100 + "%";
  }
  sliderWrapper.style.transform = "translate3D(-100%, 0, 0)";

  function goToSlider() {
    sliderWrapper.style.transform =
      "translate3D(" + -100 * (currentIdx + 1) + "%, 0, 0)";
    sliderWrapper.classList.add("animate-slider");
  }

  function goToPrev() {
    if (currentIdx > 0) {
      currentIdx--;
      goToSlider();
    }
    if (currentIdx === 0) {
      setTimeout(function () {
        currentIdx = 5;
        sliderWrapper.style.transform = "translate3D(-600%, 0, 0)";
        sliderWrapper.classList.remove("animate-slider");
      }, 301);
      console.log(currentIdx);
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
        sliderWrapper.style.transform = "translate3D(-100%, 0, 0)";
        sliderWrapper.classList.remove("animate-slider");
      }, 301);
    }
  }

  function btnsClickHandler(e) {
    const targetBtn = e.target;

    if (targetBtn.classList.contains("btn-prev")) {
      goToPrev();
      console.log(currentIdx, sliderLength - 2);
    }
    if (targetBtn.classList.contains("btn-next")) {
      goToNext();
    }
  }

  sliderBtns.addEventListener("click", btnsClickHandler);
})();
