// List of Skills Array
const toolKit = [
  {
    img: "./assets/html.png",
    tool: "HTML5",
  },
  {
    img: "./assets/css.png",
    tool: "CSS3",
  },
  {
    img: "./assets/js.png",
    tool: "JavaScript",
  },
  {
    img: "./assets/jquery.png",
    tool: "jQuery",
  },
  {
    img: "./assets/sass.png",
    tool: "Sass",
  },
  {
    img: "./assets/react.png",
    tool: "React",
  },
  {
    img: "./assets/git.png",
    tool: "Git",
  },
  {
    img: "./assets/github.png",
    tool: "Github",
  },
  {
    img: "./assets/firebase.png",
    tool: "Firebase",
  },
  {
    img: "./assets/photoshop.png",
    tool: "Photoshop",
  },
];

// Query the toolKitContainer element
const toolKitContainer = document.querySelector(".toolKitContainer ul");

toolKit.forEach((item) => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  const pElement = document.createElement("p");
  const source = document.createAttribute("src");
  const alt = document.createAttribute("alt");

  pElement.textContent = item.tool;
  source.value = item.img;
  alt.value = `${item.tool} Icon`;

  imgElement.setAttributeNode(source);
  imgElement.setAttributeNode(alt);

  liElement.append(imgElement, pElement);

  toolKitContainer.append(liElement);
});

// console.log(toolKit);

// List of Portfolio Projects
const portfolio = [
  {
    project: "Perplexity Digital Scoreboard",
    live: "https://peg-leaderboard.netlify.app/",
    github: "https://github.com/shanningtatum/scoreboard",
    img: "./assets/peg-leaderboard.png",
  },
  {
    project: "Pokemon Matching Game",
    live: "https://pokemonmemorygame.netlify.app/",
    github: "https://github.com/huddle3-2/shannon-taimoor-project2",
    img: "./assets/project2mobile.png",
  },
  {
    project: "Pokemon Quiz",
    live: "https://shanningtatum.github.io/pokemon-quiz/",
    github: "https://github.com/shanningtatum/pokemon-quiz",
    img: "./assets/pokeQuiz-mobileDesktop.png",
  },
  {
    project: "Multi-Page Website",
    live: "https://shannontaoproject1.netlify.app/",
    github: "https://github.com/shanningtatum/shannonTao-project1",
    img: "./assets/project1desktop.png",
  },
  {
    project: "Point of Sale System",
    live: "https://shanningtatum.github.io/burgershot/",
    github: "https://github.com/shanningtatum/pointOfSale",
    img: "./assets/pos-tablet.png",
  },
  {
    project: "Perplexity Escape Games Website Mock-Up",
    live: "https://shanningtatum.github.io/perplexity/",
    github: "https://github.com/shanningtatum/perplexity",
    img: "./assets/perplexityMobile.png",
  },
];

// Query the displayPortfolio element
const displayPortfolio = document.querySelector(".displayPortfolio ul");

portfolio.forEach((item) => {
  // 1
  const liElement = document.createElement("li");
  liElement.className = "portfolioLi";
  // 2
  const containerDiv = document.createElement("div");
  containerDiv.className = "portfolioContainer";
  // 3
  const projectImageDiv = document.createElement("div");
  projectImageDiv.className = "projectImage";

  const projectImage = document.createElement("img");
  projectImage.src = item.img;

  const projectTextDiv = document.createElement("div");
  projectTextDiv.className = "projectText";

  const h3Element = document.createElement("h3");
  const liveLink = document.createElement("a");

  liveLink.href = item.live;

  liveLink.innerHTML = `<span class='sr-only'>Link to ${item.name} Project</span>`;

  h3Element.textContent = item.project;

  projectImageDiv.append(projectImage);

  projectTextDiv.append(h3Element);

  console.log(liveLink);

  containerDiv.append(projectImageDiv);
  containerDiv.append(projectTextDiv);
  containerDiv.append(liveLink);

  liElement.append(containerDiv);
  displayPortfolio.append(liElement);
});
