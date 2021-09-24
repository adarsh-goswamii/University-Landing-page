
document.querySelectorAll(".navigation__item").forEach(item => {
    item.addEventListener('click', event => {
        item.children[1].classList.toggle("item__submenu--visible");
    })
});

document.querySelectorAll(".item__submenu").forEach(item=> {
    item.addEventListener('mouseleave', ()=> {
        console.log("trigger");
        item.classList.toggle("item__submenu--visible");
    });
});
