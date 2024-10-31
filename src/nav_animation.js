import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function loadingAnimation() {
    const div = document.querySelector('.navbar_right')?.offsetWidth;
    const paths = document.querySelectorAll(".navbar_logo path");
    const value = Math.max(window.innerWidth, window.innerHeight);
    const masterTimeline = gsap.timeline({
        ease: "none",
        duration: 1,
    });
    masterTimeline.from(paths, {
        duration: 0.5,
        y: 100,
        opacity: 0,
        ease: "cubic-bezier(.075, .82, .165, 1)",
        stagger: {
            each: 0.2,
            from: "start",
            amount: 0.2
        }
    })
        .from(".navbar_logo", {
        left: window.innerWidth - (div || 0) * 1.5,
    }, "+=0.6")
        .fromTo(".navbar_flag", {
        height: value,
        width: value,
    }, {
        duration: 0.6,
        height: 0,
        width: 0,
        ease: "cubic-bezier(.075, .82, .165, 1)",
    }, "-=1");
}
;
// export function animateNav() {
//     const masterTimeline = gsap.timeline({
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".navbar_section",
//             start: "top -20%",
//             end: "top -40%",
//             scrub: true,
//         },
//     });
//     masterTimeline.to(".navbar_logo", {
//         width: "5rem",
//     }).to(".navbar_right", {
//         paddingTop: "1.5rem",
//     }, 0);
// }
export function animateTeam() {
    // const firstChild = document.querySelector(".team_grid .team_image:nth-child(1)");
    const children = document.querySelectorAll(".team_grid .team_image");
    for (let i = 0; i < children.length; i++) {
        const oldStyle = children[i].getAttribute("style");
        children[i].setAttribute("style", oldStyle + `; position: relative; z-index: ${children.length - i};`);
    }
    children.forEach((child) => {
        gsap.fromTo(child, {
            z: -1000,
            x: 10,
            y: 100,
        }, {
            z: 300,
            x: 200,
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: child, // Element itself is the trigger
                start: "top bottom", // When the top of the element hits 80% of the viewport height
                end: "bottom 30%", // When the bottom of the element hits 20% of the viewport height
                scrub: true, // Smoothly scrubs the animation tied to scrollbar
                markers: true // Shows markers for debugging (remove in production)
            }
        });
    });
}
export function animationLoad() {
    const masterTimeline = gsap.timeline({});
    const lines = document.querySelectorAll(".hero_heading > span");
    lines.forEach((line) => {
        line.setAttribute("style", "position: relative; display: inline-block; filter: blur(0px); transform-origin: bottom left;");
    });
    masterTimeline.from(lines, {
        yPercent: 100,
        // rotationX: 90,
        // z: -200,
        duration: 1,
        opacity: 0,
        webkitFilter: "blur(10px)",
        ease: "cubic-bezier(.075, .82, .165, 1)",
        stagger: {
            each: 0.3,
            from: "start",
            amount: 0.3
        }
    });
}
