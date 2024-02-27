function loadData(){
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      let dataValue = document
        .getElementById("data-table")
        .getElementsByTagName("tbody")[0];

      data.forEach((item) => {
        row = dataValue.insertRow();
        for (key in item) {
          var cell = row.insertCell();
          cell.textContent = item[key];
        }
      });
    });
}


function createCard(){
    for(let i=0; i<1100; i++){
        // Creating Col
        let newCol = document.createElement("div");
        newCol.classList.add("col-3");
        newCol.classList.add("mt-4");
        
        
        // Creating Card
        let card = document.createElement("div");
        card.classList.add("card");
        newCol.appendChild(card);
    
        // Creating Card Head
        let cardHead = document.createElement("div");
        cardHead.classList.add("card-head");
        cardHead.innerHTML = `<img src="https://placehold.co/600x400" alt="Image Not Found" class="img-fluid">`
        card.appendChild(cardHead);
    
        // Creating Card Body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.innerHTML = `<h2 class="card-title">This is card Title</h2>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta nesciunt facere nam nobis at magni non et magnam voluptatibus.
                                </p>`
        card.appendChild(cardBody);
        document.getElementById("cardsContainer").appendChild(newCol);
    }
}
