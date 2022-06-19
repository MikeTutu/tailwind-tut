const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const burger_close = document.querySelector("#burger-close");

burger.addEventListener('click',()=>{
    if(menu.classList.contains('hidden'))
    {
        menu.classList.remove('hidden');
        burger_close.classList.remove('hidden');
        burger.classList.add("hidden");
    }
})

burger_close.addEventListener('click',()=>{
    if(!menu.classList.contains('hidden'))
    {
        menu.classList.add('hidden');
        burger_close.classList.add('hidden');
        burger.classList.remove("hidden");
    }
})