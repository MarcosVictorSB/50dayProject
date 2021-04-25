const panels =document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removerClasseAtivo();
      panel.classList.add('active');
    })
})

function removerClasseAtivo(){
    panels.forEach(panel => {
      panel.classList.remove('active');
    })
}