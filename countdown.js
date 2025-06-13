

(function(){

    let countdown_id = document.querySelector("#countdown-id");
    let otp_id = document.querySelector("#otp-id");
    let send_new_otp_id = document.querySelector("#send-new-otp-id");


    function startTimer(max){



        send_new_otp_id.style.display = "none";

        const interval = setInterval(function(){
            // check 
            countdown_id.innerHTML = `<strong>OTP expires in ${max} seconds</strong>`;
            
            console.log('Check number: ', max);

            if(max == 0){
                console.log("Timeout...");
                clearInterval(interval);

                otp_id.setAttribute("disabled", "disabled");
                send_new_otp_id.style.display = "inline";
            }

            max--;

        }, 1000)


}
    
    send_new_otp_id.addEventListener("click", function(){

       startTimer(60);

    })



   startTimer(60);


})()