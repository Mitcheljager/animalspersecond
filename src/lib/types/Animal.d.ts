import type { Category } from "./Category"

export interface Animal {
  name: string,
  slug: string,
  category: Category,
  annually: number,
  sources: string[],
  description?: string,
  exclude_from_total?: boolean
}
