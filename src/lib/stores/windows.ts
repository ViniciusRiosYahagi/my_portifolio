import { writable } from "svelte/store";

export const windowX = writable(Number(window.innerWidth))

window.addEventListener("resize", () => {
  windowX.set(window.innerWidth)
})