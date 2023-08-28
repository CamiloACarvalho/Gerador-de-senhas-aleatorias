
const button = document.getElementById('buttonStyle');
const inputElement = document.getElementById('inner');
const spanElement = document.getElementById('password');

const randomMakerPassword = (number) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,@#$%&*()_-=+:;/|";
    let password = "";
    for (let index = 0; index < number; index += 1) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(randomIndex);
    }
    return password;
}

button.addEventListener('click', () => {
    const number = parseInt(inputElement.value);
    const generatedPassword = randomMakerPassword(number);
    spanElement.textContent = generatedPassword;
});
