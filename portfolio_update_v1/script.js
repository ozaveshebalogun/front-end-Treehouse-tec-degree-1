let formDiv = document.querySelector(".form");
let form = document.querySelector("form");
let submit = document.getElementById("submit");
let names = document.getElementById("name");
let email = document.getElementById("email");
let msg = document.getElementById("message");
let err = document.querySelector(".err");
let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let msgErr = document.getElementById("msgErr")

let nameVerification=()=>{
    // the below is a regexp to add first and last name with one one more spaces in between
    return /((^[A-Za-z]+$){1})|((^[A-Za-z]+(\s*)?){1}$)|((^[A-Za-z]+(\s*)?[A-Za-z]+(\s*)?){1}$)/.test(names.value);
}
let emailVerification=()=>{
    return /^[^@]+@[^@.]+\.[a-z]+$/.test(email.value)
}
let msgVerification=()=>{
    return /(^([A-Za-z0-9 ?.:]+){1}$)/.test(msg.value)
}
 // INSERT OR REMOVE RED COLOR FROM THE BORDER
let redInputBorder=(elem, liErr)=> liErr.className==="show"?elem.className="errInput":elem.classList.remove("errInput");

let errDisplay=(liErr, addClass, removeClass, elem)=>{ //input error message logic
    err.classList.remove("hide");
    err.className="err show";
    liErr.className = addClass;
    liErr.classList.remove(removeClass);
    redInputBorder(elem, liErr); 
    //hide the error div if inputed but no error msg
    nameErr.className==="hide" && emailErr.className==="hide" && msgErr.className==="hide"? err.className="err hide":0;
}
let finalVerification=(e)=>{
    if(e.target.id==="name" || e.target.id==="submit")!nameVerification()?errDisplay(nameErr, "show", "hide", names): errDisplay(nameErr, "hide", "show", names);
    if(e.target.id==="email" || e.target.id==="submit")!emailVerification()?errDisplay(emailErr, "show", "hide", email): errDisplay(emailErr, "hide", "show", email);
    if(e.target.id==="message" || e.target.id==="submit")!msgVerification()?errDisplay(msgErr, "show", "hide", msg): errDisplay(msgErr, "hide", "show", msg);
    if(e.target.id==="submit" && nameVerification() && emailVerification() && emailVerification()){
        form.className="hide";
        //create element to store success message 
        let p= document.createElement("p");
        p.className="success";
        formDiv.appendChild(p);
        p.textContent = `Thank you ${names.value} for sending us message. We will get back to you very soon!`
    }else{
        form.classList.remove("hide");
    }
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    finalVerification(e);
});
document.addEventListener("change", (e)=>{
    finalVerification(e);
});

