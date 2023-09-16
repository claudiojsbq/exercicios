window.addEventListener('load',()=>{
   doFilter();
})

/* function doFilter(){
    
    let result = document.querySelector('#result');

     const old50 = people.results.filter(person=>{
        return person.dob.age > 50;        
    });

    console.log(old50)
} */



function doFilter() {
    const result = document.querySelector('#result');
  
    const filteredPeople = people.results.filter(person => {
      return person.dob.age > 50;
    });
  
    const filteredNames = filteredPeople.map(person => {
      return `Idade: ${person.dob.age} , nome: ${person.name.first},email: ${person.name.last}`;
    });
  
    result.innerHTML = filteredNames.join('<br>');
  } 


  // MEU COIGO DE TREINO COM MAP(ACHEI A MENEIRA MAIS FACIL)
/* 
  function doFilter(){
    let map = people.results.map(person=>{
      return `${person.name.first} </br>`;
    })

    let result = document.querySelector('#result')
    result.innerHTML = map
  } */