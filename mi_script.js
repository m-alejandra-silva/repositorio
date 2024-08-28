document.addEventListener('DOMContentLoaded', () => {
    function selecionar() {
        const links = document.querySelectorAll('#nav ul li a');
        links.forEach(link => {
            link.classList.remove('selected');
        });
    }

    function mostrarOcultarMenu() {
        const nav = document.querySelector('#nav');
        if (nav) {
            nav.classList.toggle('active');
        }
    }

    function openModal(imgSrc) {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        if (modal && modalImage) {
            modal.style.display = 'flex';
            modalImage.src = imgSrc;
        }
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    document.querySelectorAll('#nav ul li a').forEach(link => {
        link.addEventListener('click', selecionar);
    });

    const navResponsive = document.querySelector('.nav-responsive');
    if (navResponsive) {
        navResponsive.addEventListener('click', mostrarOcultarMenu);
    }

    document.querySelectorAll('.biblioteca .proyecto img').forEach(img => {
        img.addEventListener('click', () => openModal(img.src));
    });

    const modalClose = document.querySelector('.modal .close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
});
