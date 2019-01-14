// ---------EXERCICE 1---------

//1.1/ Créez une fonction permettant d’afficher l’interface suivante

let screen1 = document.createElement("div");

let cinemaName = document.createElement("h1");
cinemaName.textContent = "Cinéma Le Dauphin";

let cinemaDescription = document.createElement("p");
cinemaDescription.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";

let cinemaButton = document.createElement("input");
cinemaButton.type = "button";
cinemaButton.value = "Voir les films à l’affiche cette semaine";


document.body.appendChild(screen1);
screen1.appendChild(cinemaName);
screen1.appendChild(document.createElement("br"));
screen1.appendChild(cinemaDescription);
screen1.appendChild(document.createElement("br"));
screen1.appendChild(cinemaButton);


//1.2/ Créez un tableau à deux dimensions contenant les informations suivantes (ces informations sont liées aux films diffusés dans le cinéma)

let moviesThisWeek = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];


// 1.3/ Créez une fonction prenant en paramètre un tableau à deux dimensions. Cette fonction doit créer et retourner une table HTML construite à partir des données contenues dans le tableau passé en paramètre. Notez que le 1er tableau contenu dans le tableau à deux dimensions passé en paramètre doit correspondre à l’en-tête de la table HTML retournée.

function convertArrayIntoHTMLTab(array) {
  let i = 0;
  let curElt;
  let j;
  let curElt2;
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let trInHead = document.createElement("tr");
  document.body.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(trInHead);

  let firstRow = array[0];
  while (i < firstRow.length) {
    curElt = firstRow[i];
    let th = document.createElement("th");
    th.textContent = curElt;
    trInHead.appendChild(th);
    i++;
  };

  i = 1;
  while (i < array.length) {
    curElt = array[i];
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


//1.4/ Faites en sorte que lorsque le bouton “Voir les films à l’affiche cette semaine” (exercice 1.1) est cliqué :
// - l’interface créée en 1.1 soit cachée
// - la fonction créée en 1.3 soit appelée, et que la table HTML retournée par cette fonction soit affichée à l’écran

cinemaButton.addEventListener("click", displayMoviesThisWeek, false);

function displayMoviesThisWeek() {
  screen1.style.display = "none";
  convertArrayIntoHTMLTab(moviesThisWeek);
};



// ---------EXERCICE 2---------

// 2.1/ Créez un tableau à deux dimensions contenant les informations suivantes :

let tempOfSubstances = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10", "290"],
  ["alcool éthylique", "-114", "78"],
  ["aluminium", "660", "2450"]
];


// 2.2/ Créez une fonction prenant deux paramètres :
// - le tableau créé en 2.1
// - un nombre
// Cette fonction doit retourner un tableau de chaînes de caractères contenant le nom des substances dont la température d’ébullition en °C est inférieure au nombre passé en paramètre.

function compTempOfSubstances(array, number) {
 let i = 1;
 let curElt;
 let tab2 = [];
 while (i < array.length) {
   curElt = array[i];
   if (curElt[2] < number) {
     tab2.push(curElt);
   }
  i++;
 }
 console.log(tab2);

 i = 0;
 let j;
 let curElt2;
 let table = document.createElement("table");
 let tbody = document.createElement("tbody");
 document.body.appendChild(document.createElement("br"));
 document.body.appendChild(table);
 document.body.appendChild(document.createElement("br"));
 table.appendChild(tbody);

 while (i < tab2.length) {
   curElt = tab2[i];
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

compTempOfSubstances(tempOfSubstances, 100);
