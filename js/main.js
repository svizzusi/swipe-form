const login = document.querySelector(".login")
const signup = document.querySelector(".signup")
const toggle = document.querySelector(".toggle")

const loginForm = document.getElementById("form1")
const signupForm = document.getElementById("form2")

// console.log(signupForm)


login.addEventListener('click', () => {
    toggle.style.left = "5px"
    toggle.style.right = "90px"
    loginForm.style.left = "50px"
    signupForm.style.left = "600px"
    toggle.style.transition = "right .5s"
})

signup.addEventListener('click', () => {

    toggle.style.right = "5px"
    toggle.style.left = "90px"
    loginForm.style.left = "-500px"
    signupForm.style.left = "50px"
    toggle.style.transition = "left .5s"
})


const eyeOpen = document.querySelector(".eye-open")
const eyeClose = document.querySelector(".eye-close")
const passVisibility = document.getElementById("visible")
const passInput = document.getElementById("password")

passVisibility.addEventListener('change', () => {
    if(passVisibility.checked){
        passInput.type = "text"
        eyeClose.style.display = "none"
        eyeOpen.style.display = "inline-block"
    } else{
        passInput.type = "password"
        eyeClose.style.display = "inline-block"
        eyeOpen.style.display = "none"
    }
})


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.about = ()=> {
        return `The ${title} by ${author}, ${pages} pages, ${read}.`
    }
}

Book.prototype.action = function (){
    return this.read
}

function Student () {

}

Student.prototype.sayname = function (){
    console.log(this.name)
}

function Account (name){
    this.name = name
}

Account.prototype = Object.create(Student.prototype)

const Account1 = new Account("veektor")
Account1.sayname()