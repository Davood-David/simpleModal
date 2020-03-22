
// Get modal element 
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click 
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// losten for outside click
window.addEventListener('click', outsideClick);

// Fuction to open modal 
function openModal(){
    modal.style.display = 'block';
}

// Fuction to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside clicked 
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}