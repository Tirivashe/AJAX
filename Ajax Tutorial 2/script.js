const link = document.getElementById('link');
link.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function (){
        let body = document.getElementsByTagName('body')[0];
        let d = document.createElement("div");
        body.appendChild(d);

        let div = document.getElementsByTagName("div")[0];
        div.innerHTML = xhr.responseText;
        body.removeChild(link);
    }

    xhr.open('GET', 'ajax2.html', true);

    xhr.send(null);

    return false;
});