const text = document.getElementById("text");
const containerInfo = document.querySelector(".container--info");
const containerHands = document.querySelector(".container--hands");

window.addEventListener("load", () => {
  setTimeout(() => {
    selectHand();
  }, 3000);
});

containerInfo.addEventListener("click", (event) => {
  const selected = event.target.classList[2];
  if (selected === "fist" || selected === "hand" || selected === "scissor") {
    action(event);
  } else if (selected === "restart") {
    restart();
  }
});

const restart = () => {
  text.style.fontSize = "1rem";
  document.querySelector(`.restart`).remove();
  const deletePlayers = document.querySelectorAll(
    ".container--hands .fa-regular"
  );
  deletePlayers.forEach((element) => {
    element.remove();
  });
  const createPlayerOne = document.createElement("i");
  createPlayerOne.setAttribute(
    "class",
    "fa-regular fa-hand-back-fist player-1"
  );
  const createPlayerTwo = document.createElement("i");
  createPlayerTwo.setAttribute(
    "class",
    "fa-regular fa-hand-back-fist player-2"
  );
  containerHands.prepend(createPlayerOne);
  containerHands.appendChild(createPlayerTwo);
  selectHand();
};

const action = (event) => {
  const playerOne = document.querySelector(".player-1");
  const playerTwo = document.querySelector(".player-2");

  let playerOneSelectedHand;
  let playerOneSelectedHandNum;
  let roundEndText;
  const randomNum = Math.floor(Math.random() * 3);
  let playerTwoSelectedHand;

  playerOne.style.animationName = "playerOne";
  playerTwo.style.animationName = "playerTwo";
  text.textContent = "Rock! Paper! Scissors!";

  if (event.target.classList[2] === "fist") {
    playerOneSelectedHand = "fa-hand-back-fist";
    playerOneSelectedHandNum = 0;
  } else if (event.target.classList[2] === "hand") {
    playerOneSelectedHand = "fa-hand";
    playerOneSelectedHandNum = 1;
  } else {
    playerOneSelectedHand = "fa-hand-scissors";
    playerOneSelectedHandNum = 2;
  }

  if (randomNum == 0) {
    playerTwoSelectedHand = "fa-hand-back-fist";
  } else if (randomNum == 1) {
    playerTwoSelectedHand = "fa-hand";
  } else {
    playerTwoSelectedHand = "fa-hand-scissors";
  }

  if (playerOneSelectedHandNum == randomNum) {
    roundEndText = "Draw!";
  } else if (playerOneSelectedHandNum == 0 && randomNum == 1) {
    roundEndText = "You Lost!";
  } else if (playerOneSelectedHandNum == 1 && randomNum == 0) {
    roundEndText = "You Win!";
  } else if (playerOneSelectedHandNum == 2 && randomNum == 0) {
    roundEndText = "You Lost!";
  } else if (playerOneSelectedHandNum == 0 && randomNum == 2) {
    roundEndText = "You Win!";
  } else if (playerOneSelectedHandNum == 2 && randomNum == 1) {
    roundEndText = "You Win!";
  } else if (playerOneSelectedHandNum == 1 && randomNum == 2) {
    roundEndText = "You Lost!";
  }
  document.querySelector(".container--info--select-hand").remove();

  setTimeout(() => {
    const createPlayerOneSelected = document.createElement("i");
    createPlayerOneSelected.setAttribute(
      "class",
      `fa-regular ${playerOneSelectedHand} player-1`
    );
    playerOne.remove();
    containerHands.prepend(createPlayerOneSelected);

    const createPlayerTwoSelected = document.createElement("i");
    createPlayerTwoSelected.setAttribute(
      "class",
      `fa-regular ${playerTwoSelectedHand} player-2`
    );
    playerTwo.remove();
    containerHands.appendChild(createPlayerTwoSelected);
    text.style.fontSize = "2rem";
    text.textContent = roundEndText;

    playerOne.style.animationName = "";
    playerTwo.style.animationName = "";

    const createRestartButton = document.createElement("i");
    createRestartButton.setAttribute(
      "class",
      "fa-solid fa-arrow-rotate-left restart"
    );
    containerInfo.appendChild(createRestartButton);

    if (roundEndText == "You Win!") {
      let score = document.querySelector(".your-score").innerText;
      score = +score + 1;
      document.querySelector(".your-score").innerText = score;
    } else if (roundEndText == "You Lost!") {
      let score = document.querySelector(".pc-score").innerText;
      score = +score + 1;
      document.querySelector(".pc-score").innerText = score;
    }
  }, 3000);
};

const selectHand = () => {
  text.textContent = "Pick Your Hand!";

  const createContainerHands = document.createElement("div");
  createContainerHands.setAttribute("class", "container--info--select-hand");

  const createFist = document.createElement("i");
  createFist.setAttribute("class", "fa-regular fa-hand-back-fist fist");

  const createScissor = document.createElement("i");
  createScissor.setAttribute("class", "fa-regular fa-hand-scissors scissor");

  const createPaper = document.createElement("i");
  createPaper.setAttribute("class", "fa-regular fa-hand hand");

  containerInfo.appendChild(createContainerHands);
  createContainerHands.appendChild(createFist);
  createContainerHands.appendChild(createPaper);
  createContainerHands.appendChild(createScissor);
};
