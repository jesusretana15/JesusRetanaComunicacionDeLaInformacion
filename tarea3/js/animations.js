gsap.timeline()
    .to(".red-load", {
        duration: 4,
        width: "200vh",
        height: "200vh",
        ease: "power2.out"
    })
    .to(".banner", {
        backgroundColor: "red",
        duration: 1
    }, "-=1.5")
   

