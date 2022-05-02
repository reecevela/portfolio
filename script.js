window.addEventListener('load', () => {
  document.querySelector('.body').classList.add('loaded');
});

const softSkillSection = document.querySelector('.soft-skill-list');
const techSkillSection = document.querySelector('.tech-skill-list');

let softSkills = ['Production Management','Communication','Supervising Experience','Leadership'];
let techSkills = ['HTML5','CSS','JavaScript','Git','GitHub','Linux OS'];

softSkills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  softSkillSection.appendChild(listItem);
});


techSkills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  techSkillSection.appendChild(listItem);
});
