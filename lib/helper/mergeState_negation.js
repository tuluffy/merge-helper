/**
 *
 * @param field
 * @return {Function}
 */
export function mergeState_negation(field, value) {
  return function (prevState) {
    return {
      [field]: value === 'underfined' ? !prevState[field] : value,
    }
  }
}