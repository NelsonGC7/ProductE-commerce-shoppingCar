const btns = {
    close: document.getElementById('hamburger'),
    prev : document.querySelector('.Imgmenu-prev'),
    next : document.querySelector('.Imgmenu-next'),
    restar: document.getElementById('minus'),
    sumar: document.getElementById('plus'),
    add:document.querySelector('.Textcontein_btons-btons button')
}
const elements = {
    body: document.querySelector('body'),
    carrito:document.getElementById('shoppingCart'),
    nav: document.querySelector('.Header_nav'),
    btones: document.querySelector('.Textcontein_btons-btons'),
    param: document.querySelector('.Textcontein_btons-info'),
    carritoC: document.querySelector('.toltipCar'),
    toltip:document.querySelector('.toltipCar_content'),
    imgContein: document.querySelector('.Imgmenu_ruleta div'),
    images: document.querySelectorAll('.Imgmenu_ruleta div img')
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
let carro = [];
let title = null;
let suma = null;

elements.carrito.addEventListener('click',()=>{
elements.carritoC.classList.toggle('TOLTIP_active')
})

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
   suma = `$${contador * inicial}.00`;
   let sumaSin =`$${contador * inicialSin}.00`
   elements.btones.children[0].children[1].innerText = contador;
   elements.param.children[2].innerText =sumaSin;
   elements.param.children[0].innerText = suma;
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
let newContador = null;
let valoAn = null;
let elementos = elements.images.length;
let cuenta  =  1;
let carrusel = null 
btns.add.addEventListener('click',()=>{
    if(contador === 1) return;
    if(!inicial) return;
    if(valoAn){
        newContador = Number(valoAn) + Number(contador);
        valoAn =Number(valoAn) + Number(contador);
    }else{
        newContador = Number(contador)
    }
    const component = 
    `
     <figure class="toltipCar_content-item car${contador}">
            <img src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
              <h5>Fall Limited Edition Sneakrs</h5>
              <p>$${inicial}.00 x ${contador}       <strong>${suma}</strong></p>
            </div>
            <img src="./images/icon-delete.svg" alt="">
          </figure>
    `;
  
    if(!valoAn){
        valoAn = Number(contador);
    }  

    elements.toltip.insertAdjacentHTML('beforeend',component)
    document.querySelector('.Header_select_car div').classList.add('BURBUJA_active')
    const componentes = [...elements.carritoC.children[1].children];
   if(componentes.length !==0 ){
    componentes.forEach((elemento)=>{
        elemento.children[2].addEventListener('click',()=>{
            const newNoti  = elemento.children[1].children[1].innerText.split('x')[1].slice(1,2)
            valoAn = valoAn - newNoti
            if(valoAn <= 0){
                document.querySelector('.Header_select_car div').classList.remove('BURBUJA_active')
                valoAn = null
            }
            document.querySelector('.Header_select_car div').innerText = valoAn
             elemento.remove()
            
            
        })
    })
    
   }
    document.querySelector('.Header_select_car div').innerText = newContador

})
btns.next.addEventListener('click', ()=>{
    if(cuenta === elements.images.length) return;
    const transtale =  Number(cuenta) * 400;
    carrusel = transtale
    elements.imgContein.style.transform = `translateX(-${transtale}px)`
    cuenta += 1;
})
btns.prev.addEventListener('click',()=>{
    if(cuenta > elements.images.length || cuenta === 1)return;
    console.log(carrusel)
    let  transt  = Number(carrusel) - 400;
    carrusel = transt
    console.log(carrusel)
    elements.imgContein.style.transform = `translateX(-${transt}px)`
    cuenta -= 1;
})

const imgBtons = document.querySelectorAll('.Imgmenu_preview img');


console.log(imgBtons.forEach(data=>{
    data.addEventListener('click',()=>{
        const src = data.src
         elements.images[0].src = src
    })


} ))