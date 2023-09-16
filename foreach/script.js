window.addEventListener('load',()=>{
   doForEach();
})

const arrayNames = ['Claudio','Ioland','Lucca','Josy','Ana Paula','Fatima','Maria']

function doForEach() {
    const result = document.querySelector('#result');
    arrayNames.forEach((element, index) => {
      //console.log('Índice ' + index + ' Nome: ' + element);
      result.innerHTML += `Índice ${index} Nome: ${element}<br>`;
    });
  }



  