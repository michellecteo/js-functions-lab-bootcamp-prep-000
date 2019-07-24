// write your code below!
function happyHolidays() {
  return 'Happy holidays!'
}
happyHolidays();

function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!'
}
happyHolidaysTo('you');


  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })