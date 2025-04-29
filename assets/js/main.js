const blockQuoteEl = document.querySelector("blockquote > p");
const refreshBtnEl = document.querySelector("button");
const API_URL = "https://api.adviceslip.com/advice";

refreshBtnEl.style.display = "none";

refreshBtnEl.addEventListener("click", () => {
  window.location.href = "/";
});

async function getAdvicesData() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    // console.log("This is my advice: ", jsonData);
    return jsonData;
  } catch (err) {
    console.error("This is my Error: ", err);
  }
}
const adviceData = await getAdvicesData();
blockQuoteEl.innerText = adviceData.slip.advice;
// console.log(adviceData);
// Display the button after refresh the page
refreshBtnEl.style.display = "block";
