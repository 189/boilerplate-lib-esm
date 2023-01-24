import ms from 'ms'
import lunchtime from './lunchtime.js'
import millisecondsUntil from './millisecondsUntil.js'

function howLongUntilLunch(hours = 12, minutes = 30) {
  const millisecondsUntilLunchTime = millisecondsUntil(
    lunchtime(hours, minutes)
  )
  const result = ms(millisecondsUntilLunchTime, { long: true })
  console.log(result)
  return result
}

howLongUntilLunch()

export default howLongUntilLunch
