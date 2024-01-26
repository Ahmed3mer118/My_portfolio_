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
        link:"https://ahmed3mer118.github.io/Crud/",
        discription:"Product management system using JavaScript. Data can be stored in LocalStorage. Products can be modified or deleted."
    },
    {
        id:2,
        name:"T-shirt cart",
        image:"shopping.jpg",
        link:"https://ahmed3mer118.github.io/ShoppingCart/",
        discription:"An online store through which one can purchase the available products and store the purchased products"
    },
    {
      id:3,
      name:"Weahter App",
      image:"weather.jpg",
      link: "https://ahmed3mer118.github.io/WeatherApp/",
      discription:"A project to know the weather condition through the use of an API that can be searched by city name"
    },
    
    {
      id:4,
      name:"Restaurant-Template",
      image:"template.jpg",
      link: "https://ahmed3mer118.github.io/Simple-Template/",
        discription:"  This is a simple model for a restaurant, and the site is responsive on all screens"
    },
    {
        id:5,
        name:"To-do-list",
        image:"project 7.png",
        link:"https://ahmed3mer118.github.io/Todo-App/",
        discription:"A simple To do list project to store some tasks to be completed and storeable in localStorage"
    },
    {
        id:6,
        name:"Quiz App ",
        image:"quiz.jpg",
        link: "https://ahmed3mer118.github.io/QuizApp/",
        discription:"A simple project for Quiz App"
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
            <h2>${value.name}</h2>
            <p>${value.discription}</p>
          </div>
        </a>
      `;
      project.appendChild(newDiv);
    });
  }
  
  initApp();
