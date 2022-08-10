const zob = document.getElementById("kitchen_pic");
const zib = document.getElementById("hi");
const dogUrl = "https://dog.ceo/api/breed/";
let breed = "";
const dogs = "";
let input = document.getElementById("dog");

// Image swaping onclick

const changImg = function (a) {
  if ((a.src = "images/Rafale1.jpg")) {
    a.src = "images/Rafale2.jpg";
  } else {
    a.src = "images/Rafale1.jpg";
  }
};

// Bubble swaping onclick

const changTxt = function (a) {
  a.innerHTML = "<h2> Did you say treat ?!</h2>";
};


// Doggo API

const fetchDogos = async () => {
  const urlToFetch = dogUrl + input.value + "/images";
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonResponse = await response.json();
    const dogs = jsonResponse.message;
    const random = Math.floor(Math.random() * dogs.length);
    document.getElementById("chien").src = dogs[random];
    return dogs;
  }
};
