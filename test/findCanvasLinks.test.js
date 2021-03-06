/* global describe, it */

const { findCanvasLinks } = require('../src/util/html')
const assert = require('assert')

describe('findCanvasLinks', () => {
  it('takes in array of URLs and return those that contain "canvas.ubc.ca"', () => {
    let input = ['www.something.something.ubc.beta.instructure.com', 'www.nothing.ubc.ca']
    assert.deepEqual(findCanvasLinks(input), ['www.something.something.ubc.beta.instructure.com'])

    input = ['www.notmatching.canvas.ca']
    assert.deepEqual(findCanvasLinks(input), [])
  })
})
