const tap2 = document.querySelector('.content2')
const tap2Txt1 = document.querySelector('.content2 p:nth-child(1)')
const tap2Txt2 = document.querySelector('.content2 p:nth-child(2)')
const tap2Txt3 = document.querySelector('.content2 p:nth-child(3)')
console.log(tap2,tap2Txt1,tap2Txt2,tap2Txt3)

gsap.fromTo('.content2 p:nth-child(1)',{ 
            scrollTrigger:'.content2',
            opacity:0,
            x:0 ,y:100,   
        },{
            opacity:1,
            duration:3,
            x:0 ,y:-50,
        })

        gsap.fromTo('.content2 p:nth-child(2)',{ 
            scrollTrigger:'.content2',
            opacity:0,
            x:0 ,y:150,   
        },{
            opacity:1,
            duration:4,
            x:0 ,y:-50,
        })

        gsap.fromTo('.content2 p:nth-child(3)',{ 
            scrollTrigger:'.content2',
            opacity:0,
            x:0 ,y:250,   
        },{
            opacity:1,
            duration:5,
            x:0 ,y:-50,
        })
        
        gsap.fromTo('.content3 .content3_txt p',{ 
            scrollTrigger:'.content3',
            opacity:0,
        },{
            opacity:1,
            duration:10,
        })