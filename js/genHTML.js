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
    document.getElementById('suggestion-content').innerHTML += /*html */`
        <a href="/rezept.html?id=${id}">
            <div class="suggestion">
                <img src="./img/${img}">
                <h3>${name}</h3>
            </div>
        </a>
        `;
}
