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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function loadRecipe() {
    let mid = getParameterByName("id", window.location.href);
    let id = mid || 1;
    let recipe = recipes[id];
    document.title = `${recipe.name} - Kochwelt`;
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
        document.getElementById('ingridients').innerHTML += tabel(getFraction(zutat['menge'], zutat['einheit']),zutat['einheit'],zutat['name']);
    }
    for (let i = 0; i < recipe['erstellt_von'].length; i++) {
        const element = recipe['erstellt_von'][i];
        setIdText("autor", element.autor);
        document.getElementById('autor-img').src = `./img/${element.img}`;
        
    }

}

function portion() {
    let personNumber =  document.getElementById('number-of-portions').value;
    let id = getParameterByName("id", window.location.href);
    id = id || 1;

    document.getElementById('ingridients').innerHTML = '';    
    for (let i = 0; i < recipes[id]['zutaten'].length; i++) {
        const zutat = recipes[id]['zutaten'][i];
        let menge = zutat['menge'];
        menge = menge * Number(personNumber);
        menge = getFraction(menge, zutat['einheit']);
        document.getElementById('ingridients').innerHTML += tabel(menge,zutat['einheit'],zutat['name']);
    }
}

function getFraction(zahl, einheit) {
    if(einheit == 'g' || einheit == 'ml' || einheit == 'Prise'){
        return zahl.toFixed(1);
    };
    if(zahl == ''){
        return '';
    }
    let x = new Fraction(zahl);
    let res = x.toFraction(true);
    return res;
    
}

function setIdText(id,text) {
    document.getElementById(`${id}`).innerHTML = `${text}`;
    
}

function init() {
    //beim laden der Webseite 
    suggestion();
    renderRecipe();
    includeHTML();
}

//Lust auf was neues

function suggestion() {
    document.getElementById('suggestion-content').innerHTML = ''; 
    const shuffled = recipes.sort(() => Math.random() - Math.random()).slice(0, 3);
    for (let i = 0; i < shuffled.length; i++) {
        let recipe = shuffled[i];
        rezeptSeite(recipe.img, recipe.name, recipe.id);
    }
}


// ERSTER CONTAINER

function getRandomRecipe() {
    return recipes[Math.floor(Math.random() * recipes.length)];
}

function renderRecipe() {
    const recipe = getRandomRecipe();
    const rootEl = document.getElementById('erste-container');
    rootEl.innerHTML = /* html */`
            <div class="img-ubersicht">
                <img src="img/${recipe.img}">
            </div>

            <div class="rezept-ubersicht">
                <h2>${recipe.name}</h2>  <!-- H1 wird für den Namen der Webseite benutzt-->
                <p class="beschreibung-gericht">${recipe.desc}</p> <!-- Für eine Beschreibung nummt man kein h2-->
                <div class="button-rezept">
                    <a class="rezept-offnen" href="rezept.html?id=${recipe.id}">Rezept öffnen</a>
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
    return false;
}

function hideSuccess() {
    toggleSuccessContent();
}

function toggleSuccessContent() {
    document.querySelector('#success').classList.toggle('d-none');
}


// function openRecipe(id) {
//     location.replace(`./rezept.html?id=${id}`);
// }