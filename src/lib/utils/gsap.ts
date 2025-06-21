import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export function from(options: GSAPTweenVars) {
    return (element: HTMLElement) => {
        gsap.from(element, options);
    };
}

export function scroll(options: GSAPTweenVars) {
    return (element: HTMLElement) => {
        gsap.to(element, {
            scrollTrigger: element,
            ...options
        })
    }
}

export { gsap, ScrollTrigger}
