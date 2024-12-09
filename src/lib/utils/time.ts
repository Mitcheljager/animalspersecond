export function secondsToWords(seconds = 0): string {
  let rounded = Math.floor(seconds)
  let word = "second"

  if (seconds >= 60) {
    rounded = Math.floor(seconds / 60)
    word = "minute"
  }

  return `${rounded} ${word}${rounded === 1 ? "" : "s"} ago`
}

export function annuallyToDaily(value: number) {
  return value / 365
}

export function annuallyToHourly(value: number) {
  return value / 365 / 24
}

export function annuallyToSecondly(value: number) {
  return value / 365 / 24 / 60 / 60
}
