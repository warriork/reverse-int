module.exports = function reverse (n) {
    n = '' + n
    if (n[0] === '-' ) {
      n =  n.slice (1)
    }
  return n.split('').reverse().join('')
}
