/*buat tombol di menu header*/
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const bars = document.querySelectorAll('.bar');
    menu.classList.toggle('hidden');

if (!menu.classList.contains('hidden')) {
        menu.classList.add('menu-animate');
    } else {
        menu.classList.remove('menu-animate');
    }
    
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
}



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Project clicked!');
    });
});