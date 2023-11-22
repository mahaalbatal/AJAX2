

let name1 = document.querySelector("#name1");
let email = document.querySelector("#email");
let Industry = document.querySelector("#Industry");
let Technical = document.querySelector("#Technical");
let Career = document.querySelector("#Career");
let role = document.querySelector("#role");
let submit = document.querySelector("#submit");

submit.addEventListener('click', (event)=>{
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(resEvent){
        if(req.readyState === XMLHttpRequest.DONE){

            if (req.status === 200) {
                let responseJSON = JSON.parse(req.responseText);
                console.log(responseJSON);
                if(responseJSON.success == "true"){
                    document.querySelector("#message").innerHTML = "Done Successfully";
                    document.querySelector("#message").style.color = "green";

                    name1.remove();
                    email.remove(); 
                    Industry.remove();
                    Technical.remove();
                    Career.remove();
                    role.remove();
                    submit.remove(); 

                }else{
                    document.querySelector("#message").innerHTML = "FAILURE";
                    document.querySelector("#message").style.color = "red";
                }
            
            } 
        
    }
}
req.open("POST", "insert-users.php");
req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
req.send(`Name=${name1.value}&Email=${email.value}&Industry=${Industry.value}&Technical=${Technical.value}&Career=${Career.value}&Role=${role.value}`);
});


