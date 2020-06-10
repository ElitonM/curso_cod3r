let slidesIndex = 1

showSlides(slidesIndex)

function plusSlide(){
    showSlides(slidesIndex += n)
}

function currentImage(novoIndex){
    slidesIndex = novoIndex
}

function showSlides(indice){

    let i = 0;
    let slides = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dots")

    if(indice > slides.length){
        slidesIndex = 1                     /* Vai para o primeiro */
    }
    if(indice < slides.length){
        slidesIndex = slides.length         /* Ou seja, vai pro ultimo elemento */
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = "block";
    dots[indice-1].className += " active";
}
