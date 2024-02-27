let cardButton = document.querySelector("#cardButton");

cardButton.addEventListener("click", function(){
    let card = document.querySelector("#card");
    for(i = 0; i<5; i++){

        // Create a new div element for the card
        const cardDiv = document.createElement('div');
    cardDiv.classList.add('card'); // Add the 'card' class

    const cardDiv2 = document.createElement('div');
    cardDiv2.classList.add('card-head'); // Add the 'card' class
    
    const cardDiv3 = document.createElement('div');
    cardDiv3.classList.add('card-body'); // Add the 'card' class
    
    // Add content to the card
    
    cardDiv2.innerHTML = `
    <img src="images/kids_Item01.jpg" alt="" class="cardImage">
    `;
    cardDiv3.innerHTML = `
      <h2>Card Title</h2>
      <p>This is the content of the card.</p>
      <button>Click me</button>
      `;
      
      // Get the container where the card will be appended
      const cardContainer = document.getElementById('cardContainer');
      
      // Append the card to the container
      cardContainer.appendChild(cardDiv);
      cardDiv.appendChild(cardDiv2);
      cardDiv.appendChild(cardDiv3);
    }
});



async function getData(){
  await fetch("https://crud.teamrabbil.com/api/v1/ReadProduct")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}


















async function getData2(){
  const dataUrl = "https://jsonplaceholder.typicode.com/photos";
  let res = await fetch(dataUrl); // When need time to call data then await could not execute next code.
  let resObject2 = await res.json();
  let loopBtnResult = document.getElementById("loopBtnResult2");
  loopBtnResult.innerHTML = resObject2["id"];
  
   resObjectArray.forEach(function(item){
    let productName = item["ProductName"];
    document.write(productName + " <br>");
  })

  console.log (resObject2);
}

