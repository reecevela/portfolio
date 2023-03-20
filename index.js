const GITHUB_USERNAME = 'reecevela';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const PINNED_REPOS = ['Address-Maker', 'Weather', 'Social-Media-Dashboard', 'Editable-Resume', 'Binary-Search-Tree'];

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});


async function loadProjects() {
    const projectsContainer = document.querySelector('.projects');

    try {
        const repos = await fetchGithubRepos();
        const pinnedRepos = repos.filter((repo) => PINNED_REPOS.includes(repo.name));
        
        pinnedRepos.forEach((repo) => {
            const project = createProjectElement(repo);
            projectsContainer.appendChild(project);
        });
    } catch (error) {
        console.error('Failed to load projects from GitHub:', error);
    }
}

async function fetchGithubRepos() {
  const response = await fetch(GITHUB_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub repos: ${response.statusText}`);
  }

  return await response.json();
}

function createProjectElement(repo) {
  const project = document.createElement('div');
  project.classList.add('project');

  const title = document.createElement('h3');
  title.textContent = repo.name;
  project.appendChild(title);

  const link = document.createElement('a');
  link.href = repo.html_url;
  link.target = '_blank';
  link.innerHTML = `<i class="fab fa-github"></i> GitHub Repository`;
  project.appendChild(link);

  const description = document.createElement('p');
  description.textContent = repo.description;
  project.appendChild(description);

  return project;
}
