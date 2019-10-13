window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const transcriptElement = document.getElementById("transcript");
const talkButton = document.getElementById("start");
const endButton = document.getElementById("end");

let p = document.createElement("p");
transcriptElement.appendChild(p);

recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  p.textContent = transcript;
  if (transcript.startsWith("totoro" && "Totoro")) {
    if (e.results[0].isFinal) {
      p = document.createElement("p");
      p.textContent = transcript;
      transcriptElement.appendChild(p);
      p.textContent = "";

      if (transcript.includes("Hola")) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "Hola :)!";

        transcriptElement.appendChild(command);
      }

      if (transcript.includes("comida favorita")) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "Mi comida favorita es el bento.";

        transcriptElement.appendChild(command);
      }

      if (transcript.includes("gusta hacer")) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "Me gusta programar ^^";

        transcriptElement.appendChild(command);
      }

      if (
        transcript.includes("programar" && "Programación" && "programación")
      ) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "Mi lenguaje de programación favorito es c# :)";

        transcriptElement.appendChild(command);
      }

      if (transcript.includes("tu madre")) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "La tuya";

        transcriptElement.appendChild(command);
      }

      if (
        transcript.includes(
          "cómo estás" && "cómo está" && "como estas" && "Cómo estás"
        )
      ) {
        let command = document.createElement("p");
        command.classList.add("command");
        command.textContent = "Muy bien y tu?";

        transcriptElement.appendChild(command);
      }
    }
  }
});

recognition.addEventListener("end", () => {
  endButton.disabled = true;
  talkButton.disabled = false;
});

talkButton.addEventListener("click", () => {
  recognition.start();
  talkButton.disabled = true;
  endButton.disabled = false;
});

endButton.addEventListener("click", () => {
  recognition.stop();
  talkButton.disabled = false;
  endButton.disabled = true;
});
// recognition.start();
