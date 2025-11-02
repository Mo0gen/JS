function init() {
    const zoneAffichage = document.querySelector("#resultat");

    fetch("https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies")
        .then(response => response.json())
        .then(data => {

            let tableau = 
                    `<table>
                        <thead>
                            <tr>
                                <th>Drapeau</th>
                                <th>Nom du pays</th>
                                <th>Région</th>
                                <th>Langues</th>
                                <th>Population</th>
                                <th>Devise</th>
                            </tr>
                        </thead>
                    <tbody>`;

            // Remplissage du tableau
            data.forEach(pays => {
                tableau += `
                    <tr>
                        <td><img src="${pays.flag}" alt="Drapeau de ${pays.name}"></td>
                        <td>${pays.name}</td>
                        <td>${pays.region}</td>
                        <td>${pays.languages.map(l => l.name).join(", ")}</td>
                        <td>${pays.population.toLocaleString()}</td>
                        <td>${pays.currencies ? pays.currencies.map(c => c.name).join(", ") : "N/A"}</td>
                    </tr>
                `;
            });

            tableau += `</tbody></table>`;

            // Injection dans la page
            zoneAffichage.innerHTML = tableau;
        })
}



