function showMobilNav() {
    toggleMobileNav();
    console.log('goooo')
}

function closeMobilNav() {
    toggleMobileNav();
    console.log('goooo')
}


function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('show-mobile-nav');
    document.getElementById('body').classList.toggle('overflow')
}