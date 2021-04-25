let burger = document.querySelector('#burger');
let navList = document.querySelector('#navbar ul')

burger.addEventListener("click", toggleList);

function toggleList() {
    if (navList.style.width === '33%') {
        navList.style.width = '0%';
    } else {
        navList.style.width = '33%';
    }
}