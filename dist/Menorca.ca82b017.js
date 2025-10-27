document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('header');
    const burger = document.getElementById('burger-menu');
    if (!header || !burger) return;
    const btnOpen = burger.querySelector('.icon-default');
    const btnClose = burger.querySelector('.icon-active');
    function openMenu() {
        header.classList.add('is-active');
        if (btnOpen) btnOpen.setAttribute('aria-expanded', 'true');
        if (btnClose) btnClose.setAttribute('aria-hidden', 'false');
    }
    function closeMenu() {
        header.classList.remove('is-active');
        if (btnOpen) btnOpen.setAttribute('aria-expanded', 'false');
        if (btnClose) btnClose.setAttribute('aria-hidden', 'true');
    }
    btnOpen?.addEventListener('click', openMenu);
    btnClose?.addEventListener('click', closeMenu);
});

//# sourceMappingURL=Menorca.ca82b017.js.map
