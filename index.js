let charCount = document.querySelector("#charCount");
let inputBox = document.querySelector("#input")


function charCounted(element){
  element.style.color = element.value.length > 10 ? "red" : "green";
  charCount.innerHTML = element.value.length;
}

