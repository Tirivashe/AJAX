const button = document.getElementById('button');
const animalCon = document.getElementById('text');
let counter = 1;

button.addEventListener('click', () =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+counter+'.json', true);
    xhr.onload = function(){
        let data = JSON.parse(this.responseText);
        renderhtml(data);
    }
    xhr.send();
    counter++;

    if(counter > 3){
        button.style.display = 'none';
    }
});

function renderhtml(data){
    let html = '';
    for(let i in data){
       html += `<p>${data[i].name} is a ${data[i].species} that likes `;
       for(ii in data[i].foods.likes){
           if(data[i].foods.likes.length > 1){
            html += ` and ${data[i].foods.likes[ii]}`;
           }else{
           html += `${data[i].foods.likes[ii]}`;
           }
       } 
    }
    html += `</p><hr>`;
    animalCon.insertAdjacentHTML('beforeend', html);
}