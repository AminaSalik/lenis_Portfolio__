
/* GSAP TIMELINE */
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

/* TEXT ANIMATION */
tl.to(".text", {
y: "0%",
duration: 1.5,
stagger: 0.25
});
/* SLIDER OPTIONAL */
/* tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 }); */
tl.to(".introo",{
y: "-100%",
duration: 1
}); /* , "-=1" */

/* HOME PAGE CONTENT ANIMATION */




      