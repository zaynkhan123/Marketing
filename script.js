// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });



//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();




//   }

// init()


var t1 = gsap.timeline()

t1.to(".navbar-nav", {
    marginTop: 0,
    delay: 1,
    ease: Expo.easeInOut,
    duration: 1,
    scrub: 3,
})

    .to(".k", {
        marginLeft: 0,
        scrub: 3,
    })
    .to(".A", {
        marginLeft: 0,
        delay: .2,
        scrub: 3,
    })

var t2 = gsap.timeline()

t2.to(".M", {
    opacity: 1,
    delay: 2,
    duration: 2,
})

var t3 = gsap.timeline()
t3.to(".page-2 .R", {
    opacity: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        scroller: "html ",
        Trigger: ".page-2 .R",
        start: "5%",
        end: "15%",
        scrub: true
    }
})

    .to(".page-2 .N", {
        opacity: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: "html ",
            Trigger: ".page-2 .N",
            start: "10%",
            end: "15%",
            scrub: true
        }
    })

var t4 = gsap.timeline()
t4.to(".page-4 .S", {
    opacity: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        scroller: "html",
        Trigger: ".page-4 .S",
        start: "30%",
        end: "35%",
        scrub: true
    }
})

    .to(".page-4 .O", {
        marginLeft: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: "html",
            Trigger: ".page-4 .O",
            start: "35%",
            end: "40%",
            scrub: true
        }
    })
    .to(".page-4 .F", {
        marginRight: 0,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: "html",
            Trigger: ".page-4 .F",
            start: "35%",
            end: "40%",
            scrub: true
        }
    })
    .to(".page-4 .I", {
        marginRight: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: "html",
            Trigger: ".page-4 .I",
            start: "35%",
            end: "40%",
            scrub: true
        }
    })
    .to(".page-4 .Y", {
        marginLeft: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
            scroller: "html",
            Trigger: ".page-4 .Y",
            start: "35%",
            end: "40%",
            scrub: true
        }
    })