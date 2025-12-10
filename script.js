
function toggleDay(dayId) {
    const card = document.getElementById(dayId);
    const content = card.querySelector('.card-content');
    const headerButton = card.querySelector('.card-header button');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        card.classList.remove('expanded');
        headerButton.textContent = 'View Entry';
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        content.classList.add('show');
        card.classList.add('expanded');
        headerButton.textContent = 'Close Entry';
    }
}


let slideIndex = 0;
let slideTimer;


window.onload = function() {
    showSlides(); 
};

function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n === undefined) {
        slideIndex++;
    } else {
        slideIndex = n; 
    }

    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    

    slideTimer = setTimeout(function() { showSlides(); }, 5000); 
}


function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = imgElement.src;
  
    captionText.innerHTML = "Journal"; 
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}