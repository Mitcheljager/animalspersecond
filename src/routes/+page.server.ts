import { Data } from "$lib/data/Data"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const animals = Object.values(Data).map(animal => ({
		...animal,
		description: ''
	}))

	return { animals }
}
