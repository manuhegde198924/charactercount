const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
const charCount=document.getElementById("counter-container");



textareaEl.addEventListener("keyup", () => {
    updateCounter();
  });

  updateCounter()


  function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText =
      textareaEl.getAttribute("maxLength") - textareaEl.value.length;
  }

//   }if (remainingCounterEl === 50) {
//     const audio = new Audio('thank-you-99932.mp3');
//     audio.play();
// }
  
// if (remainingCounterEl === 50) {
//   remainingCounterEl.textContent = 'Great job! Keep going!';
// }
// input.addEventListener('input', updateCharacterCount);

// function updateCharacterCount() {
//     const text = input.value;
//     const count = text.length;
//     charCount.textContent = `Characters: ${count}`;
// }
// const count=remainingCounterEl.length;
// if ((count > 10) && (count<=20)) {
//   charCount.style.color = 'green'; // Turn text green for a low character count
// } else if ((count > 30) (count<=40) ) {
//   charCount.style.color = orange;  // Turn text orange for a medium character count
// } else {
//   charCount.style.color = 'red'; // Turn text red for a high character count
// }