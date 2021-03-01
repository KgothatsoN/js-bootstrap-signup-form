const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email")
const form = document.getElementById("form");
const error = document.getElementById("error")
const errorEmail = document.getElementById("error-email")
const errorTC = document.getElementById("error-T&C")
const checkBox = document.getElementById("flexCheckDefault");
const genderSelector = document.getElementById("gender");

form.addEventListener ("submit", (e) => {
    // Prevent default action (Don't refresh page)
    
    //First Name Validation
    if(fname.value.trim() == "")    {
        e.preventDefault();
        error.style.display = "block";
        error.innerText = "Field cannot be empty...";
    }

    //Last Name Validation
    if(lname.value.trim() =="")    {
        e.preventDefault();
        error.style.display = "block";
        error.innerText = "Field cannot be empty...";
    }

    // Email Validation
    if(email.value.trim() == "")    {
        e.preventDefault();
        errorEmail.style.display = "block";
        errorEmail.innerText = "Email field cannot be empty...";
    }
    else if (email.value.length < 3)    {
        e.preventDefault();
        errorEmail.style.display = "block";
        errorEmail.innerText = "Email Address too short...";
    }

    //Checkbox validation
    if(checkBox.checked == false) {
        e.preventDefault();
        errorTC.style.display = "block";
        errorTC.innerText = "Please accept Terms & Conditions.";
    }
})