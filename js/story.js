const btn1 = document.querySelector('.topmenu > div > #event')
const btn2 = document.querySelector('.topmenu > div > #str')
const eve = document.querySelector('.eve')
const story = document.querySelector('.story')
story.style.display = 'none'
btn2.addEventListener('click',function(e){
    e.preventDefault(),
    story.style.display = 'block'
    eve.style.display = 'none'
    btn2.style.color = '#7A0000'
    btn1.style.color = '#fff'
})
btn1.addEventListener('click',function(e){
    e.preventDefault(),
    story.style.display = 'none'
    eve.style.display = 'block'
    btn1.style.color = '#023E98'
    btn2.style.color = '#fff'
})