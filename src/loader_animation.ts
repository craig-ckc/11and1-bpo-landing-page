import { gsap } from "gsap";

export function startLoader() {
    // const section = document.querySelector<SVGSVGElement>(".loader_section");

    // if (section) {
    //     section.style.opacity = "0";
    // }

    const svg = document.querySelector<SVGSVGElement>(".loader_logo svg");

    const paths = document.querySelectorAll<SVGPathElement>(".loader_logo svg path");

    const bars = document.querySelectorAll<HTMLElement>(".loader_column");

    const headerSpans = document.querySelectorAll<HTMLElement>(".hero_heading > span");

    const footnotes = document.querySelectorAll<HTMLElement>(".hero_footnote");

    if (svg) {
        svg.style.overflow = "visible";
    }

    paths.forEach(path => path.style.filter = "blur(0px)");

    headerSpans.forEach(path => path.style.filter = "blur(0px)");
    headerSpans.forEach(path => path.style.display = "inline-block");

    footnotes.forEach(path => path.style.filter = "blur(0px)");

    const timeline = gsap.timeline({
        ease: "power1.inOut",
        duration: 1,
    });

    timeline.from(paths, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        webkitFilter: "blur(10px)",
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        stagger: {
            amount: 0.1
        }
    }).to(paths, {
        duration: 0.8,
        y: -100,
        opacity: 0,
        webkitFilter: "blur(10px)",
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        stagger: {
            amount: 0.1
        }
    }, "+=0.5").to(bars, {
        duration: 0.5,
        height: 0,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: {
            amount: 0.4
        }
    }).from(headerSpans, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        webkitFilter: "blur(10px)",
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        stagger: {
            amount: 0.2
        }
    }, "-=0.6").from(".hero_highlight", {
        duration: 0.8,
        right: "100%",
        ease: "cubic-bezier(.85, 0, .15, 1)",
    }).from(footnotes, {
        duration: 0.4,
        y: "2rem",
        opacity: 0,
        webkitFilter: "blur(4px)",
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: {
            amount: 0.3
        }
    }, "-=0.8");
}


export function animateWords() {
    // const word1 = document.querySelector<HTMLElement>(".people_caption-row:nth-child(1) .people_caption_text:nth-child(1)");
    // const word2 = document.querySelector<HTMLElement>(".people_caption-row:nth-child(2) .people_caption_text:nth-child(1)");

    // const word3 = document.querySelector<HTMLElement>(".people_caption-row:nth-child(1) .people_caption_text:nth-child(2)");
    // const word4 = document.querySelector<HTMLElement>(".people_caption-row:nth-child(2) .people_caption_text:nth-child(2)");


    // const loop = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

    // loop.to([word1, word2], {
    //     y: "-110%",
    //     stagger: { amount: 0.2}
    // }).to([word3, word4], {
    //     y: "-110%",
    //     stagger: { amount: 0.2 }
    // }, "-=0.8")
    // .from([word1, word2], {
    //     y: "110%",
    //     stagger: { amount: 0.2 }
    // }, "+=1").to([word3, word4], {
    //     y: "-220%",
    //     stagger: { amount: 0.2 }
    // }, "-=0.8");
}