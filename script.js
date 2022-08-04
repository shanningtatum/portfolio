const app = {};
// Query the toolKitContainer element
const toolKitContainer = document.querySelector(".toolKitContainer ul");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

// query nav links
const navBar = document.querySelector(".navBar");
const aboutLink = document.querySelector(".aboutLink");
const homeLink = document.querySelector(".homeLink");
const portfolioLink = document.querySelector(".portfolioLink");
const contactLink = document.querySelector(".contactLink");

// Query the displayPortfolio element
const displayPortfolio = document.querySelector(".displayPortfolio ul");

// query submit button and input forms
const submitButton = document.querySelector(".submitButton");
const username = document.querySelector(".userNameInput");
const email = document.querySelector(".emailInput");
const telephoneInput = document.querySelector(".telephoneInput");
const subjectInput = document.querySelector(".subjectInput");

// scroll to top query
const scrollToTop = document.querySelector(".scrollToTop");

app.renderToolkit = () => {
  toolKit.forEach((item) => {
    const liElement = document.createElement("li");
    const imgElement = document.createElement("img");
    const pElement = document.createElement("p");
    const source = document.createAttribute("src");
    const alt = document.createAttribute("alt");
    const draggable = document.createAttribute("draggable");

    pElement.textContent = item.tool;
    source.value = item.img;
    alt.value = `${item.tool} Icon`;
    draggable.value = false;

    imgElement.setAttributeNode(source);
    imgElement.setAttributeNode(alt);
    imgElement.setAttributeNode(draggable);

    liElement.append(imgElement, pElement);

    toolKitContainer.append(liElement);
  });
};

app.renderPortfolio = () => {
  portfolio.forEach((item) => {
    // creating elements for EACH portfolio project
    const liElement = document.createElement("li");
    const containerDiv = document.createElement("div");
    // >
    const portfolioTool = document.createElement("div");
    const projectImageDiv = document.createElement("div");
    const projectImage = document.createElement("img");
    const projectTextDiv = document.createElement("div");
    // >>
    const h3Element = document.createElement("h3");
    const projectDescriptionText = document.createElement("p");
    // >>>
    const projectLinks = document.createElement("div");
    const liveLink = document.createElement("a");
    const githubLink = document.createElement("a");

    // assigning class names, sources, values to elements created
    liElement.className = "portfolioLi reveal";
    containerDiv.className = "portfolioContainer";
    portfolioTool.className = "portfolioTool";
    projectImageDiv.className = "projectImage";
    projectImage.src = item.img;
    projectTextDiv.className = "projectText";
    projectLinks.className = "projectLinks";
    projectDescriptionText.textContent = item.desc;
    liveLink.href = item.live;
    githubLink.href = item.github;
    liveLink.textContent = "LIVE";
    liveLink.target = "_blank";
    githubLink.textContent = "GITHUB";
    githubLink.target = "_blank";
    h3Element.textContent = item.project;

    // Grab all the tool names
    const projectTools = item.tool;

    for (const tool in projectTools) {
      const toolElement = document.createElement("p");
      const toolName = projectTools[tool];
      toolElement.textContent = toolName;

      portfolioTool.append(toolElement);
    }

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

app.reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  console.log("hello");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

app.setupEventListeners = () => {
  // general document event listener
  document.addEventListener("scroll", function () {
    app.reveal();
  });

  // event listener for hamburger menu
  hamburgerMenu.addEventListener("click", function () {
    document.querySelector("nav .wrapper ul").classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });

  // submit button for contact form
  submitButton.addEventListener("submit", function (e) {
    e.preventDefault();
    submitButton.value = "";
    username.value = "";
    email.value = "";
    telephoneInput.value = "";
    subjectInput.value = "";
  });

  // scroll to top event listener
  scrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  // general document event listener
  document.addEventListener("scroll", function () {
    if (scrollY > 100) {
      scrollToTop.classList.add("active");
      navBar.classList.add("active");
    } else {
      scrollToTop.classList.remove("active");
      navBar.classList.remove("active");
    }
    if ((scrollY > 967 && scrollY < 2087) || scrollY == 967) {
      // about section
      aboutLink.classList.add("active");
      homeLink.classList.remove("active");
      portfolioLink.classList.remove("active");
      contactLink.classList.remove("active");
    } else if ((scrollY > 2088 && scrollY < 2655) || scrollY == 2089) {
      // portfolio section
      portfolioLink.classList.add("active");
      homeLink.classList.remove("active");
      aboutLink.classList.remove("active");
      contactLink.classList.remove("active");
    } else if (scrollY > 2655 && scrollY == 2656) {
      // contact section

      contactLink.classList.add("active");
      homeLink.classList.remove("active");
      aboutLink.classList.remove("active");
      portfolioLink.classList.remove("active");
    } else if (scrollY < 966 || scrollY == 0) {
      // home section
      homeLink.classList.add("active");
      aboutLink.classList.remove("active");
      portfolioLink.classList.remove("active");
      contactLink.classList.remove("active");
    }
  });
};

app.init = () => {
  app.renderToolkit();
  app.renderPortfolio();
  app.setupEventListeners();
};

app.init();
