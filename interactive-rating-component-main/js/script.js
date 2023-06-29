"use strict";

const compContent = document.querySelector(".component-content");
const afterSubContent = document.querySelector(".after-sub-content");
const submitBtn = document.getElementById("submit-button");
const selected = document.getElementById("selected");
const checked = document.getElementsByName("radio-group");

submitBtn.addEventListener("click", function () {
  let checkedValue = null;
  for (let i = 0; i < checked.length; i++) {
    if (checked[i].checked) {
      checkedValue = checked[i].value;

      compContent.style.display = "none";
      afterSubContent.style.display = "flex";
      selected.innerHTML = `You selected ${checkedValue} out of 5`;
    }
  }
});
