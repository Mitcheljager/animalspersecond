import { writable } from "svelte/store"

export const numbersSinceArrival = writable<Array<number>>([])
