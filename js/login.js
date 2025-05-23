function start_reg_spinner(){
    document.querySelector("#reg-spinner-id").innerHTML = 
    `
    <span> Please wait ... <span class="spinner-border spinner-border-sm" role="status">
        <span class="sr-only"></span>
    </span>`
}


function end_reg_spinner(with_message = null){
    if(with_message){
        document.querySelector("#reg-spinner-id").innerHTML = with_message;
    }else{
        document.querySelector("#reg-spinner-id").innerHTML = ``;
    }
    
}
(function(){

    document.querySelector("#registerForm").addEventListener('submit', async function(event){
        event.preventDefault();

        let firstname = this.firstname.value.trim();
        let lastname = this.lastname.value.trim();
        let email = this.email.value.trim();
        let password = this.password.value.trim();


        if(firstname.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0){

            start_reg_spinner();
            let feedback = await axios.post("http://localhost:1233/register", {
                firstname: firstname, 
                lastname: lastname, 
                email: email,
                password: password
            }); 

            console.log("Registering user --> ", feedback);

            if(feedback.data.code == "success"){

                end_reg_spinner(`<div class='alert alert-success'>${feedback.data.message}</div>`)


            }

        }


    })


}())