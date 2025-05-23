function start_spinner(){
    document.querySelector("#spinner-id").innerHTML = 
    `
    <span> Please wait ... <span class="spinner-border spinner-border-sm" role="status">
        <span class="sr-only"></span>
    </span>`
}


function end_spinner(with_message = null){
    if(with_message){
        document.querySelector("#spinner-id").innerHTML = with_message;
    }else{
        document.querySelector("#spinner-id").innerHTML = ``;
    }
    
}

(function(){

    const url = "http://localhost:1233";

    const sign_in_form = document.querySelector("#signInForm")
    
    
    sign_in_form.addEventListener("submit", async function(event){
        event.preventDefault();

        const email = this.email.value.trim(); 
        const password = this.password.value.trim();

        if(email.length > 0 && password.length > 0){

            start_spinner();
            const feedback = await axios.post(`${url}/login-user`, {
                email: email,
                password: password
            });
            if(feedback.data.code == "success"){
                // the user exists 
                end_spinner();

                // set the token in the storage
                // do auths activities ..

                location.href="/user.html";
                
            }else{
                // the user does not exist
                end_spinner(`<div class='alert alert-danger p-2'>User does not exist</div>`);

            }
            
            


            console.log(feedback)

        }


    })


}())