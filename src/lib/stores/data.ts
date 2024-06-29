import { Data } from "$lib/data/Data"
import { annuallyToSecondly } from "$lib/utils/time"
import { writable } from "svelte/store"

export const numbersSinceArrival = writable<Array<number>>(Object.values(Data).map(i => annuallyToSecondly(i.annually)))
