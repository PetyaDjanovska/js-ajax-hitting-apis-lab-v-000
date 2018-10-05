// your code here
function getRepositories(){
	let username = document.getElementById("username").value;
	let url = `https://api.github.com/users/${username}/repos`;
	const req = new XMLHttpRequest();
	req.open('GET', url);
	req.send();
  req.addEventListener('load', displayRepositories);
}


function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        `<a href='${r.html_url}'>${r.name}</a>` +
        ' - <a href="#" data-repo="' + r.name +'" data-username="' + r.owner.login + '" onclick="getCommits(this)">Get Commits</a>' +
        ' - <a href="#" data-repo="' + r.name +'" data-username="' + r.owner.login + '" onclick="getBranches(this)">Get Branches</a>' +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const repoName = el.dataset.repo;
  const username = el.dataset.username;
    const req = new XMLHttpRequest();
    req.open('GET', `https://api.github.com/repos/octocat/${repoName}/commits`);
    req.send();
    req.addEventListener('load', displayCommits);
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.author.name + '-' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
