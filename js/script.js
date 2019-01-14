// ---------EXERCISE 1---------

//1.1/

//creation of the first screen container
let screen1 = document.createElement("div");

// creation of the title
let cinemaName = document.createElement("h1");
cinemaName.textContent = "Cinéma Le Dauphin";

//creation of the description
let cinemaDescription = document.createElement("p");
cinemaDescription.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";

//creation of the button
let cinemaButton = document.createElement("input");
cinemaButton.type = "button";
cinemaButton.value = "Voir les films à l’affiche cette semaine";

//adding all these elements to the body
document.body.appendChild(screen1);
screen1.appendChild(cinemaName);
screen1.appendChild(document.createElement("br"));
screen1.appendChild(cinemaDescription);
screen1.appendChild(document.createElement("br"));
screen1.appendChild(cinemaButton);


//1.2/

//creation of the array for the movies
let moviesThisWeek = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];


// 1.3/

//creation of the function converting the array into an HTML table
function convertArrayIntoHTMLTab(array) {
  // enumeration variables 1 et 2
  let i = 0;
  let j;

  // current element 1 et 2
  let curElt;
  let curElt2;

  // creation of table elements
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let trInHead = document.createElement("tr");

  // adding these elements to the body
  document.body.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(trInHead);

  // creation of the header using the first row of the array
  let firstRow = array[0];

  // looping through the first row to create the th elements
  while (i < firstRow.length) {
    curElt = firstRow[i];
    let th = document.createElement("th");
    th.textContent = curElt;
    trInHead.appendChild(th);
    i++;
  };

  // excluding the first row of the array in enumeration since it's the header
  i = 1;

  // looping through the array to create the rows
  while (i < array.length) {
    curElt = array[i];
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    i++;
    j = 0;
    //looping through the rows to create the cells
    while (j < curElt.length) {
      curElt2 = curElt[j];
      let td = document.createElement("td");
      td.textContent = curElt2;
      tr.appendChild(td);
      j++;
    };
  };
};


//1.4/

// adding the event listener to the cinema button
cinemaButton.addEventListener("click", displayMoviesThisWeek, false);

// function hiding the first screen and displaying the movie list
function displayMoviesThisWeek() {
  screen1.style.display = "none";
  convertArrayIntoHTMLTab(moviesThisWeek);
};



// ---------EXERCISE 2---------

// 2.1/

// creation of the array for the substances
let tempOfSubstances = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10", "290"],
  ["alcool éthylique", "-114", "78"],
  ["aluminium", "660", "2450"]
];


// 2.2/

// creation of the function comparing the boiling temperatures to the number
function compTempOfSubstances(array, number) {
 // enumeration excluding the first row since it's the header
 let i = 1;

 // current element 1
 let curElt;

 //array that will be used to store the result of the comparison
 let array2 = [];

 // looping through the array
 while (i < array.length) {
   curElt = array[i];
   // if the current element in the third column is inferior to the number passed as parameter in the function, then it'll push the row into array2
   if (curElt[2] < number) {
     array2.push(curElt);
   }
  i++;
 }
 //printing the result array to the console to make sure it worked
 console.log(array2);

 //creation of the HTML table of array2

 // assigning i to 0 since we're going to loop through array2 this time
 i = 0;

 // the rest is the same as the HTML table creation in exercise 1.3, except we're not creating a header
 let j;
 let curElt2;
 let table = document.createElement("table");
 let tbody = document.createElement("tbody");

 // adding the table into screen1 so that it also becomes hidden when displaying the movie list
 screen1.appendChild(document.createElement("br"));
 screen1.appendChild(document.createElement("br"));
 screen1.appendChild(document.createElement("br"));
 screen1.appendChild(table);
 table.appendChild(tbody);

 while (i < array2.length) {
   curElt = array2[i];
   let tr = document.createElement("tr");
   tbody.appendChild(tr);
   i++;
   j = 0;
   while (j < curElt.length) {
     curElt2 = curElt[j];
     let td = document.createElement("td");
     td.textContent = curElt2;
     tr.appendChild(td);
     j++;
   };
 };
};

// calling the function
compTempOfSubstances(tempOfSubstances, 100);
