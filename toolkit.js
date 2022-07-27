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
