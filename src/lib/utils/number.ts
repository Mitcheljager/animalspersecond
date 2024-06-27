export function bigNumberToWords(number: number) {
  if (number >= 1e12) return (number / 1e12).toFixed(1).replace(/\.0$/, "") + " trillion"
  if (number >= 1e9) return (number / 1e9).toFixed(1).replace(/\.0$/, "") + " billion"
  if (number >= 1e6) return (number / 1e6).toFixed(1).replace(/\.0$/, "") + " million"
  if (number >= 1e3) return (number / 1e3).toFixed(1).replace(/\.0$/, "") + " thousand"
  return number.toLocaleString()
}
