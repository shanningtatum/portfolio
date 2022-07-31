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

  const projectDescription = document.createElement("div");
  projectDescription.classList.add("projectDescription");

  const projectTextDiv = document.createElement("div");
  projectTextDiv.className = "projectText";

  const h3Element = document.createElement("h3");
  const liveLink = document.createElement("a");
  const githubLink = document.createElement("a");

  liveLink.href = item.live;
  githubLink.href = item.github;

  liveLink.textContent = `LIVE`;
  githubLink.textContent = "GITHUB";

  h3Element.textContent = item.project;

  projectImageDiv.append(projectDescription);
  projectDescription.append(liveLink);
  projectDescription.append(githubLink);

  projectImageDiv.append(projectImage);

  projectTextDiv.append(h3Element);

  containerDiv.append(projectImageDiv);
  containerDiv.append(projectTextDiv);
  // containerDiv.append(liveLink);

  liElement.append(containerDiv);
  displayPortfolio.append(liElement);

  liElement.addEventListener("click", function (e) {
    const overlay = e.target.previousElementSibling;

    overlay.style.display = "block";
  });
});

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

// 0 HOME

// 967 ABOUT

// 2089.39990234375 PORTFOLIO

// CONTACT 2656
