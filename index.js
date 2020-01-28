const strike1 = document.querySelector("#strike1")
strike1.setAttribute("opacity", 0)
let flashTl = gsap.timeline()   
let i = 0   
while (i < 3) {
   flashTl.to(strike1, {duration: 0.07, opacity: 1})
   flashTl.to(strike1, {duration: 0.2, opacity: 0})
   i++
}
   flashTl.to(strike1, {duration: 0.1, opacity: 1})
   flashTl.to(strike1, {duration: 0.1, opacity: 0})
let tl = gsap.timeline()
   tl.fromTo("#clouds", {xPercent:100}, {xPercent: 0, duration: 15})
   tl.fromTo("#clouds2", {xPercent:100, y: -130}, {xPercent: 0, duration: 15}, "<")
   

   