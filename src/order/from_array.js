/**
 * Receives one order ( in "array format" ) and return a parsed object
 */
module.exports = (order) => {

  // TODO: do the whole transform
  const object = {
    _id: order[0]
  }

  return object
}
