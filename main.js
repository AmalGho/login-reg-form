let tabs = document.querySelectorAll(".tabs li");
let tabsArr = Array.from(tabs);
let divs = document.querySelectorAll(".content > form");
let divsArr = Array.from(divs);

tabsArr.forEach((el) => {
    el.addEventListener("click", function (e) {
        tabsArr.forEach((el) => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArr.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
    });
});


// form validation 

const email = document.getElementById("mail");

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});


let password = document.getElementById("password");
let passPattern = /^[A-Za-z]\w{7,14}$/;

password.oninput = () => {
    if (!password.value.match(passPattern)) {
        password.setCustomValidity(`- between 6 to 20 characters
        - at least one numeric digit, 
        - at least one uppercase letter 
        - at least one lowercase letter`);
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
}

let confPass = document.getElementById("confirmpassword");

confPass.oninput = () => {
    if(!confPass.value.match(password.value)){
        confPass.setCustomValidity("confirmed password must match passwored!");
        confPass.reportValidity();
    }else {
        confPass.setCustomValidity("");
    }
}

