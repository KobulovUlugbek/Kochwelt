function showMobilNav() {
    toggleMobileNav();
}

function closeMobilNav() {
    toggleMobileNav();
}

function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('show-mobile-nav');
    document.getElementById('body').classList.toggle('overflow')
}

/**
 * Rezept
 */

function loadRecipe(id) {
    let recipe = recipes[id];
    setIdText('title',recipe.name);
    document.getElementById('img').src = `./img/${recipe.img}`;
    setIdText('zubereitungsZeitTop',recipe.zubereitungsZeit);
    setIdText('date',recipe.date);
    setIdText('schwierigkeit',recipe.schwierigkeit);
    setIdText('zubereitungsZeit',recipe.zubereitungsZeit);
    setIdText('gesamtZeit',recipe.gesamtZeit);
    setIdText('instructions',recipe.instructions);

    for (let i = 0; i < recipe['zutaten'].length; i++) {
        const zutat = recipe['zutaten'][i];
        document.getElementById('ingridients').innerHTML += tabel(zutat['menge'],zutat['einheit'],zutat['name']);
    }
    for (let i = 0; i < recipe['erstellt_von'].length; i++) {
        const element = recipe['erstellt_von'][i];
        setIdText("autor", element.autor);
        document.getElementById('autor-img').src = `./img/${element.img}`;
        
    }

}

function portion() {
    let personNumber =  document.getElementById('number-of-portions').value;

    document.getElementById('ingridients').innerHTML = '';    
    for (let i = 0; i < recipes[0]['zutaten'].length; i++) {
        const zutat = recipes[0]['zutaten'][i];
        let menge = zutat['menge'];
        menge = menge * Number(personNumber);
        menge = menge.toFixed();
        document.getElementById('ingridients').innerHTML += tabel(menge,zutat['einheit'],zutat['name']);
    }               
}

function setIdText(id,text) {
    document.getElementById(`${id}`).innerHTML = `${text}`;
    
}

function init() {
    //beim laden der Webseite 
    suggestion();
    renderRecipe();
}

//Lust auf was neues

function suggestion() {
    document.getElementById('suggestion-content').innerHTML = ''; 
    const shuffled = recipes.sort(() => Math.random() - Math.random()).slice(0, 3);
    for (let i = 0; i < shuffled.length; i++) {
        let recipe = shuffled[i];
        rezeptSeite(recipe.img, recipe.name);
    }
}


// ERSTER CONTAINER

function getRandomRecipe() {
    return recipes[Math.floor(Math.random() * recipes.length)];
}

function renderRecipe() {
    const recipe = getRandomRecipe();
    console.log(`WTF? ${recipe}`);
    const rootEl = document.getElementById('erste-container');
    rootEl.innerHTML = /* html */`
            <div class="img-ubersicht">
                <img src="img/${recipe.img}">
            </div>

            <div class="rezept-ubersicht">
                <h2>${recipe.name}</h2>  <!-- H1 wird für den Namen der Webseite benutzt-->
                <p class="beschreibung-gericht">${recipe.desc}</p> <!-- Für eine Beschreibung nummt man kein h2-->
                <div class="button-rezept">
                    <button class="rezept-offnen">Rezept öffnen</button>
                </div>
            </div>
        </div>
    `
}

// CONTACT PAGE

function showSuccess() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
    toggleSuccessContent();
}

function hideSuccess() {
    toggleSuccessContent();
}

function toggleSuccessContent() {
    document.querySelector('#success').classList.toggle('d-none');
}
