(function(){

    const sign_in_form = document.querySelector("#signInForm")
    
    
    sign_in_form.addEventListener("submit", async function(event){
        event.preventDefault();

        const email = this.email.value.trim(); 
        const password = this.password.value.trim();

        if(email.length > 0 && password.length > 0){

            const feedback = await axios.post("http://localhost:1233/login-user", {
                email: email,
                password: password
            });


            console.log(feedback)

        }


    })


}())