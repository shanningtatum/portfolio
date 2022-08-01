const app = {};
// Query the toolKitContainer element
const toolKitContainer = document.querySelector(".toolKitContainer ul");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

hamburgerMenu.addEventListener("click", function () {
  document.querySelector("nav .wrapper ul").classList.toggle("active");
});

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

// Query the displayPortfolio element
const displayPortfolio = document.querySelector(".displayPortfolio ul");

app.renderPortfolio = () => {
  portfolio.forEach((item) => {
    // 1
    const liElement = document.createElement("li");
    liElement.className = "portfolioLi";
    // 2
    const containerDiv = document.createElement("div");
    containerDiv.className = "portfolioContainer";

    const portfolioTool = document.createElement("div");
    portfolioTool.className = "portfolioTool";
    // 2.1
    const projectImageDiv = document.createElement("div");
    projectImageDiv.className = "projectImage";
    // 2.1.2
    const projectImage = document.createElement("img");
    projectImage.src = item.img;
    // 2.2
    const projectTextDiv = document.createElement("div");
    projectTextDiv.className = "projectText";
    // 2.2.1
    const projectLinks = document.createElement("div");
    projectLinks.className = "projectLinks";

    const h3Element = document.createElement("h3");
    // 2.1.1.desc
    const projectDescriptionText = document.createElement("p");
    projectDescriptionText.textContent = item.desc;
    // 2.1.1.a
    const liveLink = document.createElement("a");
    // 2.1.1.b
    const githubLink = document.createElement("a");

    // Grab all the tool names
    const projectTools = item.tool;

    for (const tool in projectTools) {
      const toolElement = document.createElement("p");
      const toolName = projectTools[tool];
      toolElement.textContent = toolName;

      portfolioTool.append(toolElement);
    }

    liveLink.href = item.live;
    githubLink.href = item.github;

    liveLink.textContent = "LIVE";
    liveLink.target = "_blank";
    githubLink.textContent = "GITHUB";
    githubLink.target = "_blank";

    h3Element.textContent = item.project;

    projectImageDiv.append(projectImage);

    projectTextDiv.append(h3Element);
    projectTextDiv.append(projectDescriptionText);
    projectTextDiv.append(projectLinks);

    projectLinks.append(liveLink);
    projectLinks.append(githubLink);

    containerDiv.append(portfolioTool);
    containerDiv.append(projectImageDiv);
    containerDiv.append(projectTextDiv);

    liElement.append(containerDiv);
    displayPortfolio.append(liElement);
  });
};

app.closeDescription = (e) => {
  console.log(e.target.parentElement);
};

document.addEventListener("scroll", function () {
  if ((scrollY > 967 && scrollY < 2087) || scrollY == 967) {
    // about section
    document.querySelector(".aboutLink").classList.add("active");
    document.querySelector(".homeLink").classList.remove("active");
    document.querySelector(".portfolioLink").classList.remove("active");
    document.querySelector(".contactLink").classList.remove("active");
  } else if ((scrollY > 2088 && scrollY < 2655) || scrollY == 2089) {
    // portfolio section
    document.querySelector(".portfolioLink").classList.add("active");
    document.querySelector(".homeLink").classList.remove("active");
    document.querySelector(".aboutLink").classList.remove("active");
    document.querySelector(".contactLink").classList.remove("active");
  } else if (scrollY > 2655 && scrollY == 2656) {
    // contact section

    document.querySelector(".contactLink").classList.add("active");
    document.querySelector(".homeLink").classList.remove("active");
    document.querySelector(".aboutLink").classList.remove("active");
    document.querySelector(".portfolioLink").classList.remove("active");
  } else if (scrollY < 966 || scrollY == 0) {
    // home section
    document.querySelector(".homeLink").classList.add("active");
    document.querySelector(".aboutLink").classList.remove("active");
    document.querySelector(".portfolioLink").classList.remove("active");
    document.querySelector(".contactLink").classList.remove("active");
  }
});

app.init = () => {
  app.renderPortfolio();
};

app.init();

// 0 HOME

// 967 ABOUT

// 2089.39990234375 PORTFOLIO

// CONTACT 2656
