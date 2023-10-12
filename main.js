// console.log("this is console");


document.getElementById("year").innerHTML = new Date().getFullYear()

document.getElementById("mobile").addEventListener('input',(e)=>{
    const a = e.target.value
    if (isNaN(a)){
        console.log("ths is a number",e.target.value);
        e.target.value = '';
        return false
    }
  
})

function submitForm(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
    console.log({name,email,message,mobile});
    if(name && email && mobile && message){
         document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mobile").value = '';
        document.getElementById("message").value = '';
        // alert("thanks for Contacting");
        document.querySelector(".alert").classList.remove('danger'); 
        document.querySelector(".alert").classList.add('success');
        document.querySelector(".alert").innerHTML = "Thanks For Contacting";
        setTimeout((e)=>{
            document.querySelector(".alert").classList.remove('success');
            document.querySelector(".alert").innerHTML = "";  
        },3000)
        return true
    }else{
        document.querySelector(".alert").classList.remove('success'); 
        document.querySelector(".alert").classList.add('danger');
        document.querySelector(".alert").innerHTML ="fill all details";
        setTimeout((e)=>{
            document.querySelector(".alert").classList.remove('danger');
            document.querySelector(".alert").innerHTML = "";  
        },3000)
        return false;

    }

}



const texts = [
    "Software Developer",
    "Android Developer",
    "Web Developer"
];

const typingText = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
    if (textIndex < texts.length) {
        if (charIndex <= texts[textIndex].length) {
            typingText.textContent = texts[textIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here (milliseconds)
        } else {
            charIndex = 0;
            textIndex++;
            isTyping = false;
            setTimeout(type, 1000); // Wait for a second before erasing
        }
    } else {
        textIndex = 0;
        isTyping = true;
        setTimeout(type, 100); // Start typing the first text again
    }
}

function erase() {
    if (!isTyping) {
        if (charIndex >= 0) {
            typingText.textContent = texts[textIndex - 1].substring(0, charIndex);
            charIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here (milliseconds)
        } else {
            setTimeout(type, 1000); // Wait for a second before typing the next text
        }
    } else {
        setTimeout(erase, 100); // Continue erasing after typing all texts
    }
}

type(); // Start typing animation