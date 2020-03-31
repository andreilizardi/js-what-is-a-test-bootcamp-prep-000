// write your code below!
var name = "Susan"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}
console.log(message)

 describe('name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })
  
    describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })