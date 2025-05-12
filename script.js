const projectList = document.getElementById('project-list');
const username = 'W3BNEEK3';

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || 'No description provided.'}</p>
      `;
      projectList.appendChild(div);
    });
  })
  .catch(err => {
    projectList.innerHTML = "<p>Failed to load projects. Please visit my GitHub directly.</p>";
  });
