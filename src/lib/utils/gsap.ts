import gsap from 'gsap';

export function from(options: GSAPTweenVars) {
    return (element: HTMLElement) => {
        gsap.from(element, options);
    };
}

