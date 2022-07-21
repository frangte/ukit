const _nils = [null, undefined]
export const isNil = function _isNil(value) {
  return _nils.includes(value)
}

const _varians = ['white', 'primary', 'error', 'success', 'warning']
export const validateVarians = function _validateVarians(varian) {
  return _varians.includes(varian)
}

const _sizes = ['sm', 'md', 'lg']
export const validateSizes = function _validateVarians(size) {
  return _sizes.includes(size)
}
