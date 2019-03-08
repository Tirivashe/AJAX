const login = document.querySelector('#btn');
const body = document.getElementsByTagName('body');
login.addEventListener('click', ()=> {
    const div = document.createElement('div');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'ajax.html',true)
})