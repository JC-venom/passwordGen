const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const password1 = document.getElementById("password-1")
const password2 = document.getElementById("password-2")
const button = document.getElementById("generate-button")
//generate 2 random passwords when a button is clicked
//each password should be 15 characters long

function generate() {
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0; i < 16; i++) {
        let randomInt = Math.floor(Math.random() * characters.length)
        password1.textContent += characters[randomInt]     
    }
    for (let i = 0; i < 16; i++) {
        let randomInt = Math.floor(Math.random() * characters.length)
        password2.textContent += characters[randomInt]   
    }
}