//grab the form
const form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
//prevent the pae from reloading
event.preventDefault();

//destructure my target subjects
const {name, phone, email, notes } = event.target;
//call the generate a contact
generateContact(name.value, phone.value, email.value, notes.value);

//increment the contact count
count++;

//call the function for addCount
addCount(count);

//this will clear the inputs from the form
form.reset();

//i have to build a template for an li and input the values from the names. event. target.inputname.value
//generateContact()

//I have checked to see if I can grab the input values
// console.log("Name:",event.target.name.value);
// console.log("phone:",event.target.phone.value);
// console.log("email:",event.target.email.value);
// console.log("notes:",event.target.notes.value)
});

const listItems = document.querySelectorAll("li button");
//loop through elements
for (item of listItems){
  item.addEventListener("click", (event)=>{
    event.target.closest(".single-contact").remove();
  })
};