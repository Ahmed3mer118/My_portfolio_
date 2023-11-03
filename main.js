// var menu =document.getElementById("icon");
// var dropdown =document.querySelector(".dropdown");
// var close =document.querySelector(".close")

// menu.addEventListener("click", () => {
//     dropdown.toggle.add("dropdown-menu");
// })

let project = document.getElementById("contanierProduct");

let projects=[
    {
        id:1,
        name:"CRUD",
        image:"crud.jpg",
        link:"https://ahmed3mer118.github.io/Crud/"
    },
    {
        id:2,
        name:"T-shirt cart",
        image:"shopping.jpg",
        link:"https://ahmed3mer118.github.io/ShoppingCart/"
    },
    {
      id:4,
      name:"Weahter App",
      image:"weather.jpg",
      link: "https://ahmed3mer118.github.io/WeatherApp/"
    },
    
    {
      id:5,
      name:"Simple-Template",
      image:"template.jpg",
      link: "https://ahmed3mer118.github.io/Simple-Template/"
    },
    {
        id:3,
        name:"To-do-list",
        image:"project 7.png",
        link:"https://ahmed3mer118.github.io/Todo-App/"
    },
    {
        id:6,
        name:"Quiz App ",
        image:"quiz.jpg",
        link: "https://ahmed3mer118.github.io/QuizApp/"
    },

]

let allProject = [];

function initApp() {
    projects.forEach((value) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("container");
      newDiv.innerHTML = `
        <a href="${value.link}">
          <div class="box">
            <img src="image/${value.image}" class="image">
            <p>${value.name}</p>
          </div>
        </a>
      `;
      project.appendChild(newDiv);
    });
  }
  
  initApp();
