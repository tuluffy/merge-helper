'use strict';

/**
 *
 * @param field
 * @param value
 * @return {Function}
 */
function mergeState_base(field, value) {
  return function () {
    return {
      [field]: value
    };
  };
}

/**
 *
 * @param field
 * @param value
 * @return {Function}
 */
function mergeState_increase(field, value) {
  const val = value ? value : 1;
  return function (prevState) {
    return {
      [field]: prevState[field] + val
    };
  };
}

/**
 *
 * @param field
 * @return {Function}
 */
function mergeState_negation(field) {
  return function (prevState) {
    return {
      [field]: !prevState[field]
    };
  };
}

var main = {
  mergeState_base,
  mergeState_increase,
  mergeState_negation
};

module.exports = main;
