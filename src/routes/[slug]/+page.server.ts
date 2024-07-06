import { Data } from "$lib/data/Data"
import { error } from "@sveltejs/kit"

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	const animal = Object.values(Data).find((a) => a.slug === params.slug)

  if (!animal) throw error(404, { message: "Not found" })

	return { ...animal }
}
