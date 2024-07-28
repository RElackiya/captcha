const generateCaptcha = () => {
    let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let captchaLength = 6;
    let captcha = "";
    for(let i=0; i < captchaLength; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars.charAt(randomIndex);
    }
    document.getElementById("captcha").innerHTML = captcha;
    document.getElementById("userInput").value  = "";
    document.getElementById("result").innerHTML = "";

}

generateCaptcha();

const validateCaptcha = () => {
    let captcha =  document.getElementById("captcha").innerHTML;
    let userInput = document.getElementById("userInput").value;
    
   
    let resultElement =  document.getElementById("result");

    if(userInput === captcha)
        {
        resultElement.innerHtml = "Nice! You don't appear to be a robot.";
        result.style.color = "yellow";
        
    }
     else {
        resultElement.innerHtml = "Invalid captcha,please try again";
        result.style.color = "red";
        
    }
   
}

