let indice = 1;
let slide1 = document.getElementsByClassName('miSlider');

muestraSlides(indice, slide1);


function avanzaSlide(n){
    muestraSlides( indice+=n, slide1);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1, slide1)
},3000);


function muestraSlides(n, slide){
    let i;

    if(n > slide.length){
        indice = 1;
    }
    if(n < 1){
        indice = slide.length;
    }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    for(i = 0; i < slide1.length; i++){
        slide[i].className = slide[i].className.replace(" active", "");
    }

    slide[indice-1].style.display = 'block';
    slide[indice-1].className += ' active';

}
