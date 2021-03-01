const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email")
const form = document.getElementById("form");
const error = document.getElementById("error")
const checkBox = document.getElementById("flexCheckDefault");

form.addEventListener ("submit", (e) => {
    e.preventDefault();
    if(fname.value.trim() == "")    {
        alert("Input " + fname.name + "...")
        
    }

    if(lname.value.trim() =="")    {
        alert("Input " + lname.name + "...")
    }

    if(email.value.trim() == "")    {
        alert("Email field cannot be empty...")
    }
    else if (email.value.length < 3)    {
        alert("Email address too short...")
    }
    
    if(checkBox.checked == false) {
        alert("Accept Terms & Conditions.")
    }
})