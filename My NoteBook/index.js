function popup_submit(){
    window.location.href="index.html";
    return;
}

function register(){

    const Name=document.getElementById('Name').value;
    const email=document.getElementById('USN').value;
    const usn=document.getElementById('email').value;
    const pass=document.getElementById('Password').value;
    const cpass=document.getElementById('ConfirmPass').value;
    if(Name.length==0 || email.length==0 || usn.length==0 || pass.length==0 || cpass.length==0){
        window.alert('All fields are mandatory');
    }
    else if(Name.length<5){
        window.alert('Name should be atleast 5 characters long');
        window.location.href="register.html";
        
        return;
    }
    else if(pass.length<8){
        window.alert('Password should be atleast 8 characters long');
        window.location.href="register.html";
        return;
    }
    
    if((pass.length==0&&cpass.length==0)||pass!==cpass){
        window.alert('Password and Confirm Password should be same');
        window.location.href="register.html";
    }
    else{
        window.location.href="index.html"; 
    }
    
    localStorage.setItem('Fname',Name);
    localStorage.setItem('Usn',usn);
    localStorage.setItem('email',email);
    localStorage.setItem('Pass',pass);
    localStorage.setItem('cpass',cpass);
}


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
    window.location.reload();
    document.getElementById('pname').innerHTML=localStorage.getItem('Fname');
    document.getElementById('pemail').innerHTML=localStorage.getItem('email');
    document.getElementById('pusn').innerHTML=localStorage.getItem('Usn');
};

function login(){
    const USN=document.getElementById('USN').value;
    const Password=document.getElementById('Password').value;
}
