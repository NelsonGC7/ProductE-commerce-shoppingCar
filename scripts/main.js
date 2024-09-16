const btns = {
    close: document.getElementById('hamburger'),
    prev : document.querySelector('.Imgmenu-prev'),
    next : document.querySelector('.Imgmenu-next'),
    restar: document.getElementById('minus'),
    sumar: document.getElementById('plus')
    
}
const elements = {
    body: document.querySelector('body'),
    carrito:document.getElementById('shoppingCart'),
    nav: document.querySelector('.Header_nav'),
    btones: document.querySelector('.Textcontein_btons-btons'),
    param: document.querySelector('.Textcontein_btons-info')
}
const components = {
    nav: 
    `
     <aside class="BURGER_active">
        <img src="./images/icon-close.svg"/>
        <p>Men</p>
        <p>Collections</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
    </aside>
    
    `,
}
let contador  = 1 ;
let multiplicador = contador;
let inicial = null;
let inicialSin = null;


btns.close.addEventListener('click',
    ()=>{
       if(!document.querySelector('.BURGER_active')){
        elements.body.insertAdjacentHTML('afterbegin',components.nav)
       }
       document.querySelector('.BURGER_active').style.boxShadow = '50px 0 50px 50px rgba(0, 0, 0, 0.541)';
       document.querySelector('.BURGER_active').style.transform = 'translateX(0)';
       document.querySelector('.BURGER_active').children[0].addEventListener('click',
        ()=>{
            document.querySelector('.BURGER_active').style.boxShadow = 'none';
            document.querySelector('.BURGER_active').style.transform = 'translateX(-100%)' 

        }
       )

    }
)
btns.sumar.addEventListener('click',()=>{
   if(!inicial) {
    inicial = Number(elements.param.children[0].innerText.slice(1,-3))
    inicialSin = Number(elements.param.children[2].innerText.slice(1,-3))
   };
   contador += 1;
   let suma = `$${contador * inicial}.00`;
   let sumaSin =`$${contador * inicialSin}.00`
   elements.btones.children[0].children[1].innerText = contador;
   elements.param.children[2].innerText =sumaSin
   elements.param.children[0].innerText = suma
})
btns.restar.addEventListener('click',()=>{
    if(contador === 1) return;
    const numero =Number(elements.param.children[0].innerText.slice(1,-3));
    const numerosin = Number(elements.param.children[2].innerText.slice(1,-3))
    contador -= 1;
    let resta  = `$${numero - inicial}.00`
    let restaSin = `$${numerosin - inicialSin}.00`
    elements.btones.children[0].children[1].innerText = contador;
    elements.param.children[0].innerText = resta;
    elements.param.children[2].innerText = restaSin;
})
