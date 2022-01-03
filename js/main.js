
const init = ()=>{

    const boton = document.querySelector('input[type=button]');
    const h1 = document.querySelector('h1');
    const color_flipper=document.querySelector('.color_flipper');

    boton.addEventListener('click',()=>{
        let color = generarColor();
        color_flipper.style.background=color;
        h1.innerText=color;
    })

    h1.addEventListener('click',()=>{
        copiarAlPortaPapeles();
    })
}

const generarColor=()=>{
    let simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
    return color;
}
const copiarAlPortaPapeles=()=>{

    const text = document.querySelector('h1').innerHTML;
    if (!navigator.clipboard){
        let aux = document.createElement("input");  
        aux.setAttribute("value", ); 
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }else{
        navigator.clipboard.writeText(text).then(()=>{
            alert('copiado al portapapeles');
        })
        .catch(()=>{
            alert('error');
        });
    }

    
  
}