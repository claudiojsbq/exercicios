window.addEventListener('load',()=>{
    doMap();
})

function doMap(){
    const arrayPeople = people.results.map(person=>{
        return{
            name:person.name.first,
            email:person.email
        }
    });  

    const total = document.querySelector('#total');
    const resultElement = document.querySelector('#result');

    total.innerHTML = `total de nomes e emails encontrados = <b>${arrayPeople.length}</b></br></br>` 
    resultElement.innerHTML = arrayPeople.map(person => { 
    return `<table border=1>
    <tr><td>primeiro nome: <b>${person.name}</b></td>
    <td>email: <b>${person.email}</b></td></tr>
    </table>`;
  } ).join('');
  
}
