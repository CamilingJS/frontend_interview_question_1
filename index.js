let charCount = document.querySelector("#charCount");
let inputBox = document.querySelector("#input")


function charCounted(element){
  charCount.innerHTML = element.value.length;
  charCount.style.color = element.value.length > 10 ? "green" : "red";
}



