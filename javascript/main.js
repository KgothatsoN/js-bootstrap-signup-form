const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email")
const form = document.getElementById("form");

form.addEventListener ("submit", (e) => {
    e.preventDefault();
    if(fname.value == "")    {
        alert("Input " + fname.name + "...")
        
    }

    if(lname.value =="")    {
        alert("Input " + lname.name + "...")
    }

    if(email.value < "")    {
        alert("Email field cannot be empty...")
    }
    else if (email.value.length < 3)    {
        alert("Email address too short...")
    }
    
})