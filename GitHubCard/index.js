/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//my GitHub Profile
const axiosPromise =
  axios
    .get('https://api.github.com/users/kkdev211')
    .then(response => {
      // console.log(response);

      const user = response.data;
      console.log(user);
      entryPointInHTML.appendChild(createUserCard(user));
  })

//followers profiles
followersArray.forEach(followerName => {
  const url = `https://api.github.com/users/${followerName}`
  axios
    .get(url)
    .then(response => {
      // console.log(response);

      const user = response.data;
      console.log(user);
      entryPointInHTML.appendChild(createUserCard(user));
  })
})

  //test card

  // const userObj = {

  //   avatar_url: "https://avatars0.githubusercontent.com/u/56946693?v=4",
  //   login: "kkdev211",
  //   name: "KK",
  //   location: "Orlando, FL",
  //   profile:"https://api.github.com/users/kkdev211",
  //   followers: 5,
  //   following: 2,
  //   bio:"Full Stack Web Dev Student",
    
  // }

  //step 3
 function createUserCard(user) {
    const card = document.createElement('div');
    const newImg = document.createElement('img');
    const newCard = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const profileAddress = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    //add content
    name.textContent = user.name;
    userName.textContent = user.login;
    location.textContent = `Location: ${user.location}`;
    profile.textContent = 'Profile: ';
    followers.textContent = `Followers: ${user.followers}`;
    following.textContent = `Following: ${user.following}`;
    bio.textContent = `Bio: ${user.bio}`;
    newImg.src = user.avatar_url;

    card.classList.add('card');
    newCard.classList.add('card-info')
    name.classList.add('name');
    userName.classList.add('username');
    
    card.appendChild(newImg)
    card.appendChild(newCard)
    newCard.appendChild(name)
    newCard.appendChild(userName)
    newCard.appendChild(location)
    newCard.appendChild(profile)
    profile.appendChild(profileAddress)
    newCard.appendChild(followers)
    newCard.appendChild(following)
    newCard.appendChild(bio)

    return card

  }

  const entryPointInHTML = document.querySelector('.cards')
