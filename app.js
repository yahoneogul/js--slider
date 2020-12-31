(function () {
  const slider = document.querySelector(".slider");
  const sliderWrapper = slider.querySelector(".slider-image-wrapper");
  const sliderItem = slider.querySelectorAll(".slider-item");
  const sliderBtns = slider.querySelector(".btns");

  let sliderCount = sliderItem.length;
  let currentIdx = 0;

  for (let i = 0; i < sliderCount; i++) {
    sliderItem[i].style.left = i * 100 + "%";
  }

  function goToSlide(idxNum) {
    sliderWrapper.style.left = -100 * idxNum + "%";
    sliderWrapper.classList.add("move-slider");
    currentIdx = idxNum;
  }

  function goToPrev(currentIdx) {
    if (currentIdx == 0) {
      goToSlide(sliderCount - 1);
    } else {
      goToSlide(currentIdx - 1);
    }
  }

  function goToNext(currentIdx) {
    if (currentIdx == sliderCount - 1) {
      goToSlide(0);
    } else {
      goToSlide(currentIdx + 1);
    }
  }

  function btnsClickHandler(e) {
    const targetBtn = e.target;
    if (targetBtn.classList.contains("btn-prev")) {
      goToPrev(currentIdx);
    }
    if (targetBtn.classList.contains("btn-next")) {
      goToNext(currentIdx);
    }
  }

  sliderBtns.addEventListener("click", btnsClickHandler);
})();
