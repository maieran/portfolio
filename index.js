const sectionTitles = {
  hero: "/About",
  education: "/Ausbildung",
  projects: "/Projekte",
  "work-experience": "/Praktische Erfahrung",
  study: "/Studium",
  others: "/Andere"
};

const sectionColors = {
  hero: "section-about",
  education: "section-education",
  projects: "section-projects",
  "work-experience": "section-experience",
  study: "section-education",
  others: "section-others"
};

const sectionElements = Object.keys(sectionTitles).map(id => document.getElementById(id));
const sectionTitleElement = document.getElementById("current-section");

let heroLock = false;

// Klick auf den Namen ("Andre Maier")
const navNameLink = document.getElementById("nav-name-link");
navNameLink.addEventListener("click", () => {
  heroLock = true;

  // Sofort Titel und Farbe setzen
  sectionTitleElement.textContent = sectionTitles["hero"];
  sectionTitleElement.className = "nav-section-title";
  sectionTitleElement.classList.add(sectionColors["hero"]);

  // Lock nach kurzer Zeit wieder lösen
  setTimeout(() => {
    heroLock = false;
  }, 1000);
});

// Scroll-Listener
window.addEventListener("scroll", () => {
  if (heroLock) return;

  let current = "";

  sectionElements.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.id;
    }
  });

  if (current) {
    sectionTitleElement.textContent = sectionTitles[current];
    sectionTitleElement.className = "nav-section-title";
    sectionTitleElement.classList.add(sectionColors[current]);
  }
});
