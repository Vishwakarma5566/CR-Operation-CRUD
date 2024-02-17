
let list = document.querySelector('#list');

function refresh(){
    fetch('/name')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        list.innerHTML = '';
        const names = data;
        for(let name of names){
            let p = document.createElement('p');
            p.innerHTML = name;
            p.classList.add('name-item');
            list.appendChild(p);
        }
    })
}

refresh();

let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('input');

    let newName = {
        // 'id':10,
        'value': input.value
    }
    fetch('http://localhost:7400/name?_method=patch', {
        method:'POST',
        body:JSON.stringify(newName),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        refresh();
    })
})