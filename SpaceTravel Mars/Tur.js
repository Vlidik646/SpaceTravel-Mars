const buttons = document.querySelectorAll('.card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Ой! Сталась помилка, спробуйте пізніше");
    });
});