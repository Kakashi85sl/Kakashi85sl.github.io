// Active the burger menu and the off-screen menu

const burgerMenu = document.querySelector(".menuBurger")

const menu = document.querySelector(".off-screen")

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    menu.classList.toggle("active");
})

// Clean the form fields after submit or show an error message

const send = document.querySelector("#submit")
const errorMessage = document.querySelector(".error")
const fill = document.querySelector("#email")
const form = document.querySelector("#Form")

send.addEventListener("click", () => {
    event.preventDefault()
    if (fill.value === "") {
        errorMessage.textContent = "Please fill all the required fields"
        return
    }
    errorMessage.textContent = "-- Your message has been sent! --";
    form.reset()
})


// Change language

const langSwitch = document.getElementById('langSwitch');

const currentPage = window.location.pathname;
const isEnglish = currentPage.includes("index.html"); 

// Set text en or it Imposta il testo del pulsante in base alla lingua attuale
langSwitch.textContent = isEnglish ? "ENG" : "ITA";


langSwitch.addEventListener("click", () => {
    if (isEnglish) {
        // IT version
        window.location.href = "index_it.html";
    } else {
        // EN version
        window.location.href = "index.html";
    }
});
