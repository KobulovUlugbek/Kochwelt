function tabel(zahl,einheit, name) {
    return /*html */`
    <tr>
        <td>${zahl} ${einheit}</td>
        <td></td>
        <td>${name}</td>
    </tr>
    `;
}

function rezeptSeite(img, name){
    document.getElementById('suggestion-content').innerHTML += `<div class="suggestion">
         <img src="./img/${img}">
         <h3>${name}</h3>
         </div>`;
}
