function showAnswer(response) {
  let answer = response.data.answer;
  let answerElement = document.querySelector("#answers");
  answerElement.innerHTML = answer;
}

function aiAsk() {
  let apiKey = "1abte8c00a79ddf038b756348o47c6af";
  let context = "be professional, and provide a short answer. 1-3 sentences.";
  let prompt = document.getElementById("prompt").value;
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=" +
    encodeURIComponent(prompt) +
    "&context=" +
    encodeURIComponent(context) +
    "&key=" +
    apiKey;

  axios.get(apiUrl).then(showAnswer);
  console.log(response.data.answer);
}
const form = document.querySelector("form");
const submitButton = document.querySelector("#AskBtn");

submitButton.addEventListener("click", aiAsk);
