import type { Readable } from "svelte/store"
import { readable } from "svelte/store"

export const secondsSinceArrival: Readable<number> = createIntervalStore()

function createIntervalStore(): Readable<number> {
	const initial: Date = new Date()

  return readable(1, set => {
    const update = () => set((+new Date() + 1000 - +initial) / 1000)

    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)
  })
}
