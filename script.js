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
// Typing animation for the h1
const typedText = document.getElementById('typed-text');
const messages = ["Welcome To My Portfolio", "My name is Seiyefa Amos Clever"];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = messages[messageIndex];
  typedText.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1200); // Pause before deleting
    } else {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);
