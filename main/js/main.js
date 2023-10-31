const btnDown = document.querySelector('.btn-scroll');

btnDown.addEventListener('click', SetScrollIntoViewOptions)

function SetScrollIntoViewOptions(top) {
    const appFunctions = document.querySelector('.app-functions');
    appFunctions.scrollIntoView({
        block: "center",
        behavior : "smooth",
    });
}