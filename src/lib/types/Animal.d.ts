export interface Animal {
  name: string,
  slug: string,
  annually: number,
  sources: Array<string>,
  description?: string,
  exclude_from_total?: boolean
}
