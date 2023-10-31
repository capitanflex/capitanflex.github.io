const titles = document.querySelectorAll('.function-feed__title');
let activeTitle = document.querySelector('.function-feed__title.active'); 

titles.forEach(element => {
    element.addEventListener('click', () => setActiveTitle(element));
});

function setActiveTitle(newActiveTitle) {
    activeTitle.classList.remove('active');
    activeTitle = newActiveTitle;
    activeTitle.classList.add('active');
}