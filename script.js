//const show = document.getElementById('password');
const button = document.getElementById('buttonStyle');
const inputElement = document.getElementById('input');

const randomMakerPassword = (caracteresNumber) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,@#$%&*()_-=+:;/|";
    let password = "";
    for (let index = 0; index < caracteresNumber; index += 1) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(randomIndex);
    }
    return console.log(password); //Não sei como atribuir a saída para ser exibida na tela.
}
const caracteresNumber = parseInt(inputElement.value);
button.onclick = randomMakerPassword(caracteresNumber)

