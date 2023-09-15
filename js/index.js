const hid = document.querySelector('header .header .hidden_nav .hidden')
const off = document.querySelector('header .header .hidden_nav .hidden a:first-child')
const on = document.querySelector('header .header .hidden_nav > a')
console.log(hid,on,off)
hid.style.display = 'none'
on.addEventListener('click',function(e){
    e.preventDefault(),
    hid.style.display = 'flex'
})
off.addEventListener('click',function(e){
    e.preventDefault(),
    hid.style.display = 'none'
})