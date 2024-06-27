const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.fromTo(".mcLogoSvg",{ opacity: 0},
    { opacity: 1, duration: 5 })   





let myMediaQuery = window.matchMedia('(min-width: 1440px)');

if(myMediaQuery.matches) {
    gsap.timeline()
    .to(".red-load", {
        duration: 4,
        width: "200vh",
        height: "200vh",
        ease: "power2.out"
    })
    .to(".banner", {
        backgroundColor: "red",
        duration: 2
    }, "-=1.5")
    
    gsap.to(".text-go-menu", { scale: 0.9,
        duration: 1.5, 
        repeat: -1,   
        yoyo: true });
   } else{
    gsap.timeline()
    .to(".red-load", {
        duration: 10,
        width: "200vh",
        height: "200vh",
        ease: "power2.out"
    })
    .to(".banner", {
        backgroundColor: "red",
        duration: 2
    }, "-=1.5")
    
    gsap.to(".text-go-menu", { scale: 0.9,
        duration: 1.5, 
        repeat: -1,   
        yoyo: true });
   }
