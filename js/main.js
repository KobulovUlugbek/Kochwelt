function showMobilNav() {
    toggleMobileNav();
}

function closeMobilNav() {
    toggleMobileNav();
}


function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('show-mobile-nav');
    document.getElementById('body').classList.toggle('overflow')
}