function tabel(zahl,einheit, name) {
    return /*html */`
    <tr>
        <td>${zahl} ${einheit}</td>
        <td></td>
        <td>${name}</td>
    </tr>
    `;
}

function rezeptSeite(img, name, id){
    document.getElementById('suggestion-content').innerHTML += /*html */`<div class="suggestion" onclick="openRecipe(${id})">
         <img src="./img/${img}">
         <h3>${name}</h3>
         </div>`;
}
