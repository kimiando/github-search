const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const cardHTML = document.getElementById('main')
// getUser('kimiando')

async function getUser(username) {
const { data } = await axios(APIURL + username)

createUserCard(data)
}

function createUserCard(user) {
  const cardHTML = `
<div class="card">
  <div>
    <img src="${user.avatar_url}" alt="${user.name}">
  </div>
  <div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <p>${user.location}</p>
      <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos">
        <a href="#" class="repo"> Repo 1</a>
        <a href="#" class="repo"> Repo 2</a>
        <a href="#" class="repo"> Repo 3</a>
      </div>
    </div>
  </div>
</div>`
  main.innerHTML = cardHTML
}
form.addEventListener('submit', (e) =>{
  e.preventDefault()
  const user = search.value
  if (user){
    getUser(user)
    search.value = '';
  }
})
