const userForm = document.querySelector(".user_form");
const userInput = document.querySelector(".user_form input")
const userName = document.querySelector(".user_name");
const changeName = document.querySelector(".change_name");

const HIDDEN = "hidden"

function submitUser(event) {
    event.preventDefault();
    const inputName = userInput.value;
    userForm.classList.add(HIDDEN);
    userName.innerText = `반가워요! ${inputName}!` ;
    userName.classList.remove(HIDDEN) ;
    changeName.classList.remove(HIDDEN);
    localStorage.setItem("user", inputName)
}
function removeUser() {
    localStorage.removeItem("user");
    userName.innerText="";
    userForm.classList.remove(HIDDEN);
    changeName.classList.add(HIDDEN);
    userInput.value = "";
}

if (localStorage.getItem("user") === null) {
    userForm.addEventListener("submit", submitUser)
} else {
    userForm.classList.add(HIDDEN);
    userName.classList.remove(HIDDEN);
    userName.innerText = `반가워요! ${localStorage.getItem("user")}!`
    changeName.classList.remove(HIDDEN);
}
changeName.addEventListener("click", removeUser);