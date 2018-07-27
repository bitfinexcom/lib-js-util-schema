/* eslint-env mocha */

const schema = require('..')

describe('order schema', () => {

  it('to array', () =>{
    const orders = require('./mocks/order/object')

    const result = orders.map(schema.order.toArray)
  })

  it('from array', () => {
  })

})
