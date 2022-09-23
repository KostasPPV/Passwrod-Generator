const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const letters = characters.slice(0,52)
const numbers = characters.slice(52,62)
const symbols = characters.slice(62)
let password1_el = document.getElementById("passw-border1")
let password2_el = document.getElementById("passw-border2")
let length_passwEL = document.getElementById("passw_length-btn")
length_passwEL.textContent = 8
let char = characters
let letters_check = document.getElementById("letters")
let numbers_check = document.getElementById("numbers")
let symbols_check = document.getElementById("symbols")
function generate_btn(){
    check()
    password1_el.textContent = ""
    password2_el.textContent = ""
    if ((letters_check.checked || numbers_check.checked) === false){
        char = symbols
    }else if ((letters_check.checked || symbols_check.checked) === false){
        char = numbers
    }else if ((numbers_check.checked || symbols_check.checked) === false){
        char = letters
    }else if (letters_check.checked === false){
        char = numbers + symbols
    }else if (numbers_check.checked  === false){
        char = letters + symbols
    }else if (symbols_check.checked === false){
        char = letters + numbers
    } else if ((letters_check.checked && numbers_check.checked && symbols_check.checked) === true){
        char = characters
    }
    for (let i = 1; i < length_passwEL.textContent + 1; i ++ ){
        password1_el.textContent += char[Math.floor(Math.random() * (char.length + 1))]
        password2_el.textContent += char[Math.floor(Math.random() * (char.length + 1))]
    } 
    password1_el.textContent = password1_el.textContent.slice(0,length_passwEL.textContent)
    password2_el.textContent = password2_el.textContent.slice(0,length_passwEL.textContent)
}

function up_btn(){
    if (length_passwEL.textContent < 15 ){
        length_passwEL.textContent ++    
        
    } else{
        alert("Password must be between 8 and 15 characters long!!")
    }
}
function down_btn(){
    if (length_passwEL.textContent > 8 ){
        length_passwEL.textContent --
    } else{
        alert("Password must be between 8 and 15 characters long!!") 
    }
}  

function check(){
    if ((letters_check.checked || numbers_check.checked || symbols_check.checked) === false){
        document.getElementById("Generate-btn").disabled = true //kanei disable to button
        setInterval(function(){alert("You must choose at least one option")},1000) //stelnei mnm ston xristi na epileksei
    }
    document.getElementById("Generate-btn").disabled = false 
}