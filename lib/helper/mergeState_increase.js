/**
 *
 * @param field
 * @param value
 * @return {Function}
 */
export function mergeState_increase(field, value) {
  const val = value ? value : 1;

  return function (prevState) {
    return {
      [field]: prevState[field] + val,
    }
  }
}