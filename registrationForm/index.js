const userInputBtn = document.getElementById('userInput');
const passwordBtn = document.getElementById('password');
const confirmPasswordBtn = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submit');


function submitBtns(){
    // console.log('Hey you! are you there?')
    if(userInputBtn.value === '' || userInputBtn.value.length < 4 && userInputBtn.value.toUpperCase[0] !== userInputBtn.value[0]){
        alert('Kindly input a valid Username')
    }

    if(passwordBtn.value === '' && passwordBtn.value.toLowerCase[0] !== userInputBtn.value[0]){
        alert('Input a valid password')
    }

    if(confirmPasswordBtn.value !== passwordBtn.value){
        alert('confirm Password')
    }
}














submitBtn.addEventListener('click', submitBtns);









// username
// check if field is empty
// check if field is between 6 and 15
// check if field is in the database

// password
// check if field is empty
// check if fielf is between 6 and 15

// This function checks if the arguement is an empty string
// const checkEmptyField = (field) => {
//     const result = (field !=="")? true:false
//     return result
// }

// This function checks if the argument is less than 6 or greater than 15
// const checkFieldWidth = (field) => {
//     const result = (field.length >= 6 && field.length <= 15)?
//     true:false
//     return result
// }

// This function checks if the username already exist in the database 
// const checkInDatabase = (field) => {
//     if (Object.keys(database).includes(field)) {
//         return false
//     } else {
//         return true
//     }
// }

// const userInput = document.querySelectorAll('userInput');

// const validateUsername = () => {
//     for (input of userInput) {
//         if (!checkEmptyField(input.value)) {
//             input.placeholder = "input field cannot be empty"
//             return false
//         }
//         if (!checkFieldWidth(input.value)) {
//             input.value = ""
//             input.placeholder = "field must be between 6 and 15 characters"
//             return false
//         }
//     }
//     if (!checkInDatabase(userInput[0].value)) {
//         alert("Username exists already, pick another")
//         return false
//     }
//     return true 
// }

// document.querySelector(".submit-btn").addEventListener('click', (e) =>{
//     e.preventDefault();
//     if(validateUsername()) {
//         alert("Welcome")
//     }
// })





















