const accordionBtn = document.querySelectorAll("[type='radio']");
const accordionContent = document.querySelectorAll(".accordioncontent");
const accordionWrapper = document.querySelectorAll(".accordionwrapper");
const arrowIcon = document.querySelectorAll(".arrow-image");
const accordionQuestion = document.querySelectorAll(".accHeader");
accordionBtn.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    accordionContent.forEach((div) => {
      div.style.transition = "0";
      div.style.opacity = "0";
    });
    accordionWrapper.forEach((div) => {
      div.style.height = "8%";
    });
    arrowIcon.forEach((img) => {
      img.style.transform = "rotate(180deg)";
    });
    accordionQuestion.forEach((p) => {
      p.style.fontWeight = "400";
    });
    accordionQuestion[index].style.fontWeight = "bold";

    accordionContent[index].style.transition = "0.5s";
    accordionContent[index].style.opacity = "1";
    accordionWrapper[index].style.height = "25%";
    arrowIcon[index].style.transform = "rotate(0deg)";
  });
});
/* for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", (event) => {
    accordionContent[i].style.transition = "0.5s";
    accordionWrapper[i].style.height = "25%";
    accordionContent[i].style.opacity = "1";
    for (let y = 0; y < accordionBtn.length; y++) {
      if (y < i || y > i) {
        accordionContent[y].style.transition = "0";
        accordionWrapper[y].style.height = "8%";
        accordionContent[y].style.opacity = "0";
      }
    }
  });
} */
