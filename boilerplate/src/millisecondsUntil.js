export default function millisecondsUntil(date) {
  return date.getTime() - Date.now()
}
