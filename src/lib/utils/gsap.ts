import { windowX } from '$lib/stores/windows.svelte';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { get } from 'svelte/store';

gsap.registerPlugin(ScrollTrigger);

export function gsapFrom(options: GSAPTweenVars) {
	return (element: HTMLElement) => {
		gsap.from(element, options);
	};
}

export function gsapScroll() {
	return (element: HTMLElement) => {
		if (get(windowX) < 600) {
			return
		}
		
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				toggleActions: 'play pause none none',
				scrub: true,
				start: '20% center',
				end: '50% center'
			},
			translateX: -500,
			ease: 'power3.inOut',
			opacity: 0,
			duration: 1.5
		});
	};
}

export function gsapItems(options: GSAPTweenVars) {
	return (element: HTMLElement) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element
			},
			...options
		});
	};
}
