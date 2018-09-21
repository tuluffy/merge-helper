/**
 *
 * @param field
 * @param value
 * @return {Function}
 */
export function mergeState_increase(field, value) {
  return function (prevState) {
    return {
      [field]: prevState[field] + (value ? value : 1),
    }
  }
}