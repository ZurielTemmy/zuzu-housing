cancelbtn = document.querySelector('.banner-icon').addEventListener('click', removeBanner);
banner = document.querySelector('.banner')
collapseBtn = document.querySelector('.js-collapse-btn').addEventListener('click', collapse);
navBar = document.querySelector('.js-navbar')
smallSize = document.querySelector('.js-small-size')
collapseCancelBtn = document.querySelector('.js-collapse-cancel').addEventListener('click', collapseCancel);
function removeBanner() {
    banner.style.display = 'none';
}

function collapse() {
    navBar.style.display = 'block';
    smallSize.style.visibility = 'hidden';
}

function collapseCancel() {
    navBar.style.display = 'none';
    smallSize.style.visibility = 'visible';
}

