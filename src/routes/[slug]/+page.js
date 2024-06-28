import { Data } from "$lib/data/Data"
import { toSlug } from "$lib/utils/route"
import { error } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

	const animal = Object.values(Data).find((a) => toSlug(a.name) === params.slug)

  if (!animal) throw error(404, { message: "Not found" })

	return { ...animal }
}
