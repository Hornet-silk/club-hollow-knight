const boutonfact = document.getElementById('boutonfact');
const texteBlague = document.getElementById('texteBlague');

const blagues = ["Le faux chevalier a volé l'armure de l'un des 5 grands chevaliers d'Hallownest",
                 "Hornet est la demi-soeur du chevalier",
                 "On peut détruire le masque du faiseur de masque,mais celui-ci en possède plusieurs",
                 "Vous pouvez avoir les lucioles électriques dans votre journal du chasseur",
                 "Cloth peut rester en vie, si vous affrontez le seigneur traitre seul",
                 "Si vous ne tuez pas le forgeron d'aiguillon, celui-ci rejoindra Sheo et ils formeront un couple.",
                 "L'endeuillé grise est l'un des 5 grands chevaliers d'Hallownest.",
                 "Unn, dans hollow knight,et Nuu, dans silksong, ont le même prénom mais inversé."
                 ];
boutonfact.addEventListener('click', ()=>{
    console.log("testttt")
    texteBlague.textContent = blagues[Math.floor(Math.random()*blagues.length)];

})

