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
    project: "Pokemon Matching Game",
    live: "https://pokemonmemorygame.netlify.app/",
    github: "https://github.com/huddle3-2/shannon-taimoor-project2",
  },
  {
    project: "Pokemon Quiz",
    live: "https://shanningtatum.github.io/pokemon-quiz/",
    github: "https://github.com/shanningtatum/pokemon-quiz",
  },
  {
    project: "Multi-Page Website",
    live: "https://shannontaoproject1.netlify.app/",
    github: "https://github.com/shanningtatum/shannonTao-project1",
  },
  {
    project: "Point of Sale System",
    live: "https://shanningtatum.github.io/burgershot/",
    github: "https://github.com/shanningtatum/burgershot",
  },
  {
    project: "Perplexity Escape Games Website Mock-Up",
    live: "https://shanningtatum.github.io/perplexity/",
    github: "https://github.com/shanningtatum/perplexity",
  },
];

// Query the displayPortfolio element
const displayPortfolio = document.querySelector(".displayPortfolio ul");

portfolio.forEach((item) => {
  const liElement = document.createElement("li");
  const h3Element = document.createElement("h3");
  const liveLink = document.createElement("a");
  const githubLink = document.createElement("a");
  //   const liveSource = document.createAttribute("href");
  //   const githubSource = document.createAttribute("href");

  liveLink.href = item.live;
  githubLink.href = item.github;

  liveLink.textContent = "LIVE";
  githubLink.textContent = "GITHUB";

  h3Element.textContent = item.project;

  liElement.append(h3Element);
  liElement.append(liveLink);
  liElement.append(githubLink);

  console.log(liveLink);

  displayPortfolio.append(liElement);
});
