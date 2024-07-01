import { derived, type Readable } from "svelte/store"
import { secondsSinceArrival } from "./time"
import { Data } from "$lib/data/Data"
import { annuallyToSecondly } from "$lib/utils/time"
import { Category } from "$lib/data/Category"

export const numbersSinceArrival: Readable<number[]> = derived(secondsSinceArrival, ($secondsSinceArrival) =>
  Object.values(Data).filter(a => a.category === Category.Land).map(i => annuallyToSecondly(i.annually) * $secondsSinceArrival)
)
