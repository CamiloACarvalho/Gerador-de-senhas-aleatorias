const randomMakerPassword = (caracteresNumber) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,@#$%&*()_-=+:;/|";
    let password = "";
    for (let index = 0; index < caracteresNumber; index += 1) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(randomIndex);
    }
    return password;
}

console.log(randomMakerPassword(18));

//chatGPT me ajudou daqui para baixo, mas não sei o que ta dando de errado

// const generatePassword = () => { 
//     const inputElement = document.getElementById("input");
//     const caracteresNumber = parseInt(inputElement.value);
//     const generatedPassword = randomMakerPassword(caracteresNumber);

//     const passwordElement = document.getElementById("password");
//     passwordElement.textContent = generatedPassword;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const generateButton = document.querySelector(".buttonStyle");
//     generateButton.addEventListener("click", generatePassword);
// });
