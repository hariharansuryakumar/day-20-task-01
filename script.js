async function logCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let countries = await response.json();
  
    let container = document.createElement("div");
    container.setAttribute("class", "container");
  
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "title");
    h1.setAttribute("class", "text-center");
    h1.innerText = "Countries";
    container.appendChild(h1);
  
    let row = document.createElement("div");
    row.setAttribute("class", "row");
  
    for (let i = 0; i < countries.length; i++) {
      let col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-sm-12 g-3");
  
      let card = document.createElement("div");
      card.setAttribute("class", "card h-100");
  
      let cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header text-center bg-dark");
      cardHeader.style.color = "white";
      cardHeader.innerText = countries[i].name.common;
      card.appendChild(cardHeader);
  
      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body text-center bg-light");
      cardHeader.style.backgroundColor = "grey";
      card.appendChild(cardBody);
  
      let img = document.createElement("img");
      img.setAttribute("class", "img-fluid");
      img.src = countries[i].flags.svg;
      cardBody.appendChild(img);
  
      let capital = document.createElement("h5");
      capital.setAttribute("class", "card-text");
      capital.innerText = `\n Capital : ${countries[i].capital}`;
      cardBody.appendChild(capital);
  
      let region = document.createElement("h5");
      region.setAttribute("class", "card-text");
      region.innerText = `\n Region : ${countries[i].region}`;
      cardBody.appendChild(region);
  
      let countryCode = document.createElement("h5");
      countryCode.setAttribute("class", "card-text");
      countryCode.innerText = `\n Contry Code : ${countries[i].cca3} \n`;
      cardBody.appendChild(countryCode);
  
      col.appendChild(card);
      row.appendChild(col);
    }
    container.appendChild(row);
    document.body.append(container);
  }
  logCountry();
  