const text1 = document.getElementById("Quote1"); 
const text2 = document.getElementById("Quote2"); 
const startingagain = document.getElementById("startingagain");
//first affirmation - local array

  
  // program to get a random item from an array
  //function getRandomItem(arr) {
  
    // get random index value
    //const randomIndex = Math.floor(Math.random() * arr.length);
  
    // get random item
    //const item = arr[randomIndex];
  
   // return item;}
  
  

  // second affirmations - api array
startingagain.addEventListener("click", () => {
  text2.innerHTML = ""
  fetch("https://type.fit/api/quotes")
    .then(function(response) { 
      return response.json();
    })
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const item = data[randomIndex];
      console.log("item; " , item);
      text2.innerHTML += item.text;
    });
  })
