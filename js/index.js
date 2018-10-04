// your code here
function getRepositories(){
	let name = document.getElementById("username").value;
	let url = `https://api.github.com/users/${name}/repos`;
	const req = new XMLHttpRequest();
	req.addEventListener('load', showRepositories);
	req.open('GET', url);
	req.send();
}


function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {

}
