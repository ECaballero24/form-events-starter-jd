function generateContact(name, telephone, email, notes) {
  //   const li = contactTemplate(name, telephone, email, notes);

  
  // const li = document.createElement("li");
  // li.classList.add("single-contact");
const li = contactTemplate(name, telephone, email, notes)
  // // this will create a new li
  // if (name && telephone && email) {
  //   li.innerHTML = `
  //   <h3>🌏</h3><p><strong>Name</strong>: ${name}</p>
  //   <p><strong>Tel:</strong></strong> ${telephone}</p>
  //   <p><strong>Email:</strong> ${email}</p>
  //   <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;
    //Grab the ul list from the DOM
    const ul = document.querySelector("ul");
    // append the newly created li
    ul.append(li);
  }
// }

function contactTemplate(name, telephone, email, notes) {
  const li = document.createElement("li");
  li.classList.add("single-contact");

//create button
const removeButton = document.createElement("button");

//add text to button
removeButton.textContent= "Remove Contact";
//add an event listener to the button to remove li
removeButton.addEventListener("click",(event)=>{
  //find the closest li to this button and remove it
  event.target.closest(".single-contact").remove();
});


  if (name && telephone && email) {
    li.innerHTML = `<h3>🌏</h3><p><strong>Name</strong>: ${name}</p>
    <p><strong>Tel:</strong></strong> ${telephone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;

    //append the button to the li

    li.append(removeButton);
  }

  return li;
}


// const listItems = document.querySelectorAll("li button");
// //loop through elements
// for (item of listItems){
//   item.addEventListener("click", (event)=>{
//     event.target.closest(".single-contact").remove();
//   })
// };