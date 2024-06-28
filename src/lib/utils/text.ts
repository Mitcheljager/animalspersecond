export function capitalizeFirstLetter(string: string): string {
  const words = string.split(" ")

  for (let i = 0; i < words.length; i++) {
    if (!/[a-zA-Z]/.test(words[i].charAt(0))) continue

    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    break
  }

  return words.join(" ")
}
