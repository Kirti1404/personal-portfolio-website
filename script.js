/* ===============================
   Smooth Scroll Navigation
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ===============================
   Skills Progress Animation
================================ */
const skillLevels = document.querySelectorAll(".skill-level");
let skillsAnimated = false;

function animateSkills() {
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 150 && !skillsAnimated) {
    skillLevels.forEach(skill => {
      skill.style.width = skill.dataset.skill;
    });
    skillsAnimated = true;
  }
}

window.addEventListener("scroll", animateSkills);
