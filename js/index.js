// your code here
function getRepositories(){
	let name = document.getElementById("username").value;
	let url = `https://api.github.com/users/${name}/repos`;
	const req = new XMLHttpRequest();
	req.open('GET', url);
	req.send();
  req.addEventListener('load', showRepositories);
}


function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ` - <a href='https://api.github.com/${r.full_name}'>link to URL</a></li>`
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
    const req = new XMLHttpRequest();
    req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
    req.send();
    req.addEventListener('load', displayCommits);
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
