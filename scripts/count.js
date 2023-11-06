
//create variable to track count
let count = 1;

//create a function to add the new count to .contact-count class
function addCount(currentCount){
    //grab the spam with the .contact-class
    const span = document.querySelector(".contact-count");
    span.textContent = `(Contacts: ${currentCount})`;

};
//update the text with the dynamic count