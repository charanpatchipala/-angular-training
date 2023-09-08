const usersList = document.querySelector(".users-container");

 

let pageno = 1;

let limit = 10;

let maxlength;

 

function addUser() {

  console.log("Adding...");

  const name = document.querySelector(".user-name").value;

  const avatar = document.querySelector(".user-avatar").value;

 

  const data = {

    name,

    avatar,

  };

 

  // Create

  // 1. method - POST

  // 2. data - JSON & body

  // 3. Header - JSON data

 

  // Create -> Refresh

  fetch("https://64f6f41e9d7754084952d8a0.mockapi.io/cricket", {

    method: "POST",

    body: JSON.stringify(data),

    headers: {

      "Content-type": "application/json",

    },

  }).then(() => getUsers());

 

  console.log(name, avatar);

}

 

const createUser = ({ name, avatar, createdAt, id }) => {

  usersList.innerHTML += `<div class="user">

        <img

          class="user-pic"

          src=${avatar}

          alt=${name}

        />

       

        <div class="user-detail">

          <h2 class="user-name">${name}</h2>

          <p>${new Date(createdAt).toDateString()}</p>

          <button onclick="deleteUser(${id})">Delete</button>

        </div>

      </div>`;

};

function searchUser(){
  const input=document.querySelector(".searchUser").value;
  fetch(`https://64f6f41e9d7754084952d8a0.mockapi.io/cricket?name=${input}`, {
    method:"GET"
  }).then((res)=>res.json())
  .then((user)=>{
    usersList.innerHTML=""
  user.forEach(createUser);
  })
}

 

function deleteUser(id) {

  // Print the id of user in console

  console.log("Deleting... User", id);

 

  // Avoided Race condition

  // Delete -> Refresh

  fetch(`https://64f6f41e9d7754084952d8a0.mockapi.io/cricket/${id}`, {

    method: "DELETE",

  }).then(() => getUsers());

 

  // Race Condition

  // Lorry

  // fetch(`https://60c98aa8772a760017203b57.mockapi.io/users/${id}`, {

  //   method: "DELETE",

  // })

 

  // Ferrari

  // getUsers()

}

 

function prevPage() {

  if (pageno == 1) {

    return;

  }

 

  pageno--;

 

  getUsers();

}

 

function nextPage() {

  //  fetch("https://64f6f41a9d7754084952d870.mockapi.io/users")

  // .then((res)=>res.json())

  // .then((users)=>console.log(users.length))

 

  console.log(maxlength);

  if (pageno == maxlength) {

    return;

  }

  pageno++;

 

  getUsers();

}

 

function totalUsers() {

  fetch("https://64f6f41e9d7754084952d8a0.mockapi.io/cricket", {

    method: "GET",

  })

    .then((res) => res.json())

    .then((users) => {

      console.log(users.length);

 

      maxlength = Math.ceil(users.length / limit);

      createButtons();

      console.log(maxlength);

    });

}

totalUsers();

 

function createButtons() {

  const button = document.querySelector(".page-button-container");

  for (let i = 1; i <= maxlength; i++) {

    button.innerHTML += `  <button onclick="nav(${i})">${i}</button>`;

  }

 

  nav(pageno);

}

 

function nav(pagenum) {

  pageno = pagenum;

  getUsers();

}

 

function getUsers() {

  fetch(

    `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket?page=${pageno}&limit=${limit}`,

    {

      method: "GET",

    }

  )

    .then((res) => res.json())

    .then((users) => {

      // Clear the old list

      usersList.innerHTML = "";

      // Adding the new list

      users.forEach(createUser);

    });

}

 

getUsers();

 