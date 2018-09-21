/**
 *
 * @param field
 * @return {Function}
 */
export function mergeState_negation(field) {
  return function (prevState) {
    return {
      [field]: !prevState[field]
    }
  }
}