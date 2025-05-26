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



    // Handle Image Uploading
    let uploadprofile = document.querySelector("#upload_profile");

    uploadprofile.addEventListener("input", function(){

        const image_file = this.files.item(0);

        console.log(image_file);

        const allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/heic']

        const image_type = image_file.type;


        if(allowed_types.includes(image_type)){
            //proceed
        let image_file_reader = new FileReader();

        image_file_reader.readAsDataURL(image_file);

        image_file_reader.onload = function(){

                image_loaded = this.result;
                
                document.querySelector("#image-info").innerHTML = `<img src='${image_loaded}' width="75">`
            

        }


        }else{
            //wrong image format
        
        }

        })


})


async function logOutUser(event){
    //clear the database
    event.preventDefault()

    await localforage.removeItem("_paygo_user", function(){

        location.href="index.html";

    })

}