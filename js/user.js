window.addEventListener('DOMContentLoaded', async function(event){

    //get the user data from database(indexedDB)
    let user_info_id = this.document.querySelector("#user-info");

    user_info_id.innerHTML="<small>Please wait... </small>"

    let result = await localforage.getItem("_paygo_user");

    console.log(result);

    if(result){
        // retrieve the user 
        const firstname = result["firstname"];
        const lastname = result["lastname"];
        const email = result["email"];
        const is_email_verified = result["is_email_verified"];


        // display in the browser
        user_info_id.innerHTML = firstname;
    }else{
        location.href = "index.html";

    }


})


async function logOutUser(event){
    //clear the database
    event.preventDefault()

    await localforage.removeItem("_paygo_user", function(){

        location.href="index.html";

    })

}