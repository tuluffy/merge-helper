/**
 *
 * @param field
 * @param value
 * @return {Function}
 */
export function mergeState_base(field, value) {
  return function () {
    return {
      [field]: value,
    }
  }
}