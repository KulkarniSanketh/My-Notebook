var name,usn,Email,pass,cpass;

function register() {
    // Collecting input values
    let name = document.getElementById('Name').value;
    let usn = document.getElementById('USN').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('Password').value;
    let cpass = document.getElementById('ConfirmPass').value;

    // Storing the values in localStorage
    localStorage.setItem('Fname', name);
    localStorage.setItem('Usn', usn);
    localStorage.setItem('email', email);
    localStorage.setItem('Pass', pass);
    localStorage.setItem('cpass', cpass);

    // Redirect to profile page (optional, as form action is already doing this)
    window.location.href = "profile.html";
}

window.onload = function() {
    // Retrieving stored values and displaying them on profile page
    if (document.getElementById('pname')) {
        document.getElementById('pname').innerHTML = "Name: " + localStorage.getItem('Fname');
        document.getElementById('pemail').innerHTML = "Email: " + localStorage.getItem('email');
        document.getElementById('pusn').innerHTML = "USN: " + localStorage.getItem('Usn');
        document.getElementById('ppass').innerHTML = "Password: " + localStorage.getItem('Pass');
    }
}





function statement(){
    alert('You can Enter Grade(In Capital letters) or marks');
}



