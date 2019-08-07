var tableauApprenants = '{  "tableau": [' +
'{ "Nom": "Arcab" , "Prenom": "Gerard" , "Annee": 1981 , "Moyenne": 12  },' +
'{ "Nom": "Brandt" , "Prenom": "Mathieu" , "Annee": 1989 , "Moyenne": 16 },' +
'{ "Nom": "Paulson" , "Prenom": "Robert" , "Annee": 1975 , "Moyenne": 14 } ]}';

var obj = JSON.parse(tableauApprenants);

document.getElementById("demo").innerHTML =
obj.tableau[0].Nom + " " + obj.tableau[0].Prenom+ " " + obj.tableau[0].Annee+ " " + obj.tableau[0].Moyenne + "</br> " +
obj.tableau[1].Nom + " " + obj.tableau[1].Prenom+ " " + obj.tableau[1].Annee+ " " + obj.tableau[1].Moyenne + "</br> " +
obj.tableau[2].Nom + " " + obj.tableau[2].Prenom+ " " + obj.tableau[2].Annee+ " " + obj.tableau[2].Moyenne;
