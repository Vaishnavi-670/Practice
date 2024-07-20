var allh1=document.querySelectorAll('#page h1')
allh1.forEach(function(elem){
    var clutter=""
    var h1text=document.querySelectorAll
    var splitedText=h1text.split('')
    splitedText.forEach(function(letter){
        clutter+=`<span>${letter}</span>`
    })
    elem.innerHTML=clutter
})

gsap.to("#page2 h1 span",{
    color:"while",
    stagger:0.1,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller:"body",
        start: "top 50%",
        end: "top 10%",
        markers:true,
        scrub:1
    }
})