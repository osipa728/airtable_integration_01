// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "key1xdXqIxLKWtZEo" }).base("appZLkJVTmANCUSOY");

// get our collection base, select all the records
// specify functions that will receive the data
base("playlist").select({ maxRecords:100 }).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our data
var songs = [];

//colors
const shuffle = document.querySelector('.shuffle')
const body = document.querySelector('html')
const colors = ['#FAE751', '#D84C46', '#87D9DF', '#D570BF', '#77C1A8', '#F6CA5A', '#AE36E7', '#f8961E', '#2541b2', '#d2ff28', '#ff7900', '#c879ff', '#fe5a5a', '#79fe5a']


//
// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");

  // call functions to log and show the books
  try {
      showSongs();
  } catch (error) {
      console.error(error);}
} 


// look through our airtable data, create elements
function showSongs() {
  console.log("showSongs()");
  songs.forEach(song => {
    // create container for each song
    var songContainer = document.createElement("li");
    songContainer.classList.add("song-container");
    songContainer.classList.add("glide__slide");
    document.querySelector(".glide__slides").append(songContainer);


    // *add song titles*
  //  var songTitle = document.createElement("h1");
  //  songTitle.classList.add("song-title");
  //  songTitle.innerText = song.fields.title;
  //  songContainer.append(songTitle);

   // var nameOfArtist = document.createElement("h1");
   // nameOfArtist.classList.add("song-artist");
   // nameOfArtist.innerText = song.fields.artist;
   // songContainer.append(nameOfArtist);

   var songDescription = document.createElement("p");
   songDescription.classList.add("song-description");
   //song.fields.title accesses the title column!
   songDescription.innerText = song.fields.title;
   songContainer.append(songDescription); 
   songDescription.style.color = 'red';
   songDescription.style.fontFamily = 'expositregular';

    var songImage = document.createElement("img");
    songImage.classList.add("song-image");
    songImage.src = song.fields.image[0].url;
    songContainer.append(songImage);
    
    // add event listener to add active class to song container
    //songContainer.addEventListener("click", function(event) {
    //  songDescription.classList.toggle("active");
    //  songImage.classList.toggle("active");
   // });
  
    // get genre field from airtable
    // loop through the array and add each genre as
    // a class to the song container
  
   var songGenre = song.fields.genre;
    songGenre.forEach(function(genre) {
      songContainer.classList.add(genre.replace(' ', '-').toLowerCase());
     });
  
    // clicking on filter by pop
    // change background of pop genres to red
    // else change to white
    // var filterPop = document.querySelector(".pop");
    // filterPop.addEventListener("click", function() {
    //   if (songContainer.classList.contains("pop")) {
    //     songContainer.style.background = "red";
    //   } else {
    //     songContainer.style.background = "white";
    //   }
    // });
  
    // filter by indie music
    // var filterIndie = document.querySelector(".indie");
    // filterIndie.addEventListener("click", function() {
    //   if (songContainer.classList.contains("indie")) {
    //     songContainer.style.background = "red";
    //   } else {
    //     songContainer.style.background = "white";
    //   }
    // });
    
    // filter by shoegaze music
    // var filterShoegaze = document.querySelector(".shoegaze");
    // filterShoegaze.addEventListener("click", function() {
    //   if (songContainer.classList.contains("shoegaze")) {
    //     songContainer.style.background = "red";
    //   } else {
    //     songContainer.style.background = "white";
    //   }
    // });
  
    // filter reset
    // var filterReset = document.querySelector(".js-reset");
    // filterReset.addEventListener("click", function() {
    //   songContainer.style.background = "white";
    // });
  });
}
