function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco()


function cursor(){
    var page1 = document.querySelector("#page1")
var cur = document.querySelector("#cursor")

page1.addEventListener("mousemove", function(dets){
    gsap.to(cur,{
        x: dets.x,
        y: dets.y
    })
})
page1.addEventListener("mouseenter", function(){
    cur.style.scale = "1";
    cur.style.opacity = "1";
})
page1.addEventListener("mouseleave", function(){
    cur.style.scale = "0";
    cur.style.opacity = "0";
})
}
cursor()


function Effect(){
    gsap.from("#page2-t1 ",{
        y: 120,
        stagger: 0.2,
        duration: 1.,
        scrollTrigger: {
           trigger: "#page2",
           scroller: "#main",
           start: "top 45%",
           end: "top 46%",
          //  markers: true,
           scrub: 2
        }
    })
}
Effect()


function textEffect(){   
    gsap.from("#page2-t2 span ",{
        y: 100,
        stagger: 0.2,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
           trigger: "#page2",
           scroller: "#main",
           start: "top 43%",
           end: "top 46%",
          //  markers: true,
           scrub: 2
        }
    })
}
textEffect()

function cursor2(){
    var page4 = document.querySelector("#page4")
var cur2 = document.querySelector("#cursor2")

page4.addEventListener("mousemove", function(elem){
   gsap.to(cur2,{
    x: elem.x,
    y: elem.y
   })
})
page4.addEventListener("mouseenter", function(){
    cur2.style.scale = "1";
    cur2.style.opacity = "1";
})
page4.addEventListener("mouseleave", function(){
    cur2.style.scale = "0";
    cur2.style.opacity = "0";
})
}
cursor2()

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

   var tl = gsap.timeline()
   tl.from("#loader h3",{
    x: 200,
    stagger: 0.3,
    duration: 1,
    opacity: 0
   })
   tl.to("#loader h3",{
    opacity: 0,
    x: -10,
    stagger: 0.1
   })
   tl.to("#loader",{
    opacity: 0
   })
   tl.to("#loader",{
   display: "none"
   })
   tl.from("#page1 span",{
    y: 100,
    stagger: 0.2,
    opacity: 0,
    duration: 0.4
   })