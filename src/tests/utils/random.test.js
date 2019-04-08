import { getRandomInArray, getRandomIntBetween } from '../../utils/random'

describe('random', () => {
  describe.each([[1, 10], [10, 20], [1, 5]])(
    'getRandomIntBetween',
    (a, b) => {
      test(`gets random int between ${a} and ${b}`, () => {
        expect(getRandomIntBetween(a, b)).toBeGreaterThanOrEqual(a)
        expect(getRandomIntBetween(a, b)).toBeLessThanOrEqual(b)
      })
    }
  )

  describe.each`
  array    
  ${[1, 2, 10]} 
  ${[10, 20]} 
  ${[1]} 
`('getRandomInArray',
  ({ array }) => {
    test(`gets random in array ${array}`, () => {
      expect(array).toContain(getRandomInArray(array))
    })
  })
})
