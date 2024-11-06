function popup_submit(){
    window.location.href="index.html";
    return;
}
function call() {
    let obj = new Date();
    document.getElementById("hourse").innerHTML = Math.abs(obj.getHours() - 12);
    document.getElementById("minutes").innerHTML = obj.getMinutes();
    document.getElementById("seconds").innerHTML = obj.getSeconds();
    document.getElementById("ms").innerHTML = obj.getMilliseconds()%10;
}
setInterval(call, 1);
function register() {
    const Name = document.getElementById('Name').value;
    const usn = document.getElementById('USN').value; // Corrected to get USN
    const email = document.getElementById('email').value; // Corrected to get email
    const pass = document.getElementById('Password').value;
    const cpass = document.getElementById('ConfirmPass').value;

    // Validation
    if (Name.length == 0 || email.length == 0 || usn.length == 0 || pass.length == 0 || cpass.length == 0) {
        window.alert('All fields are mandatory');
        return; // Prevent navigation
    }
    if (Name.length < 5) {
        window.alert('Name should be at least 5 characters long');
        return; // Prevent navigation
    }
    if (pass.length < 8) {
        window.alert('Password should be at least 8 characters long');
        return; // Prevent navigation
    }
    if (pass !== cpass) {
        window.alert('Password and Confirm Password should be the same');
        return; // Prevent navigation
    }

    // Save data to localStorage
    localStorage.setItem('Fname', Name);
    localStorage.setItem('Usn', usn);
    localStorage.setItem('email', email);
    localStorage.setItem('Pass', pass);
    
    // Redirect to index.html after saving
    window.location.href = "index.html";
}

function displayProfileInfo() {
    document.getElementById('pname').innerText += localStorage.getItem('Fname') || "No data";
    document.getElementById('pemail').innerText += localStorage.getItem('email') || "No data";
    document.getElementById('pusn').innerText += localStorage.getItem('Usn') || "No data";

}

// Call displayProfileInfo when the page loads
window.onload = displayProfileInfo;

function updateProfile(){
    alert("Entered");
    let name=prompt('Enter your name');
    const email=prompt('Enter your email');
    const usn=prompt('Enter your usn');
    const pass=prompt('Enter your password');
    const cpass=prompt('Enter your confirm password');

    if(name===null || email===null || usn===null || pass===null || cpass===null){
        window.alert('Please fill all the fields');
        return;
    }else if(pass!==cpass){
        window.alert('Password and Confirm Password should be same');
        return;
    }else{
        window.alert('Profile updated successfully');
    }
    localStorage.setItem('Fname',name);
    localStorage.setItem('Usn',usn);
    localStorage.setItem('email',email);
    localStorage.setItem('Pass',pass);
    localStorage.setItem('cpass',cpass);
    displayProfileInfo();
};

function login(){
    const USN=document.getElementById('USN').value;
    const Password=document.getElementById('Password').value;
}

function message(){
    document.getElementById("passmessage").innerHTML ="(Minimum 8 characters) 1 capital letter, 1 number, and 1 special character is required.";
}
function clearmsg(){
    document.getElementById("passmessage").innerHTML ="";
}
