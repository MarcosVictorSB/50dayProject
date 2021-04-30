const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e){
        
        /* fornece as coordenadas horizontais dentro da área do aplicativo do cliente em que o evento ocorreu */
        const x = e.clientX;
        /**ornece a coordenada vertical do cliente dentro da aplicacão em que o evento ocorreu */
        const y = e.clientY;

        console.log(x, y);
        /* offsetTop é um método apenas de leitura que retorna a medida, em pixels, da distância do elemento atual em relação ao topo do offsetParent */
        const buttonTop = e.target.offsetTop;
        /*  um método apenas de leitura que retorna a medida, em pixels, da distância do canto superior esquerdo do elemento atual para o nó */
        const buttonLeft = e.target.offsetLeft;

        console.log(buttonLeft, buttonTop);

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle  = document.createElement('span');
        circle.classList.add('circle')
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })    
});