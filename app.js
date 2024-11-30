const imgIcon = document.querySelector('.img-icon');
const input = document.querySelector('input');

imgIcon.addEventListener('click', () => {
    imgIcon.classList.toggle('open');

    if (imgIcon.classList.contains('open')) {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
})