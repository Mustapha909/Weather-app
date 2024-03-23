const weatherForm = document.querySelector("form");
const search = document.addEventListener("input");
const messageOne = document.addEventListener("#message-1");
const messageTwo = document.addEventListener("#message-2");

messageOne.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDeafult();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("http://localhost:3000/weather?adress=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
