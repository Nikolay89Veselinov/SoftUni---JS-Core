const  Sumator = require('./Sumator Class')
const expect = require('chai').expect


describe("Sumator Unit Test", function() {
    let sumator
    beforeEach(function(){
            sumator = new Sumator()
    })

    describe('check if functions exist', function () {
        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.be.equal(true)
        })
        it('add func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })
        it('sum num exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })
        it('remove by filter func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })
        it('toString func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })



    })
    it("test if data length is empty", function() {
        expect(sumator.data.length).to.be.equal(0)
    })
    describe('add fun tests', function () {
        it('add only numbers ', function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3')
        })
        it('add only string ', function () {
            sumator.add("Kiro")
            sumator.add("Ivan")
            sumator.add("Gosho")
            expect(sumator.data.join(', ')).to.be.equal("Kiro, Ivan, Gosho")
        })
        it('add only obj ', function () {
            sumator.add({ name: "Kiril"})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal("[object Object], [object Object]")
        })
        it('add only obj ', function () {
            sumator.add({ name: "Kiril"})
            sumator.add(4)
            sumator.add('Gosho')
            expect(sumator.data.join(', ')).to.be.equal("[object Object], 4, Gosho")
        })
    })
    describe("test sum nums",function () {
        it('sum only numbers ', function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(12)
        })
        it('sum only numbers ', function () {
            sumator.add('Gosho')
            sumator.add({})
            sumator.add({ name: "Hrisi"})
            expect(sumator.sumNums()).to.be.equal(0)
        })
        it('sum only numbers ', function () {
            sumator.add('Gosho')
            sumator.add({})
            sumator.add(3)
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(7)
        })
    })
    describe("test remove by filter", function () {
        it('removes all odd numbers ', function () {
            for (var i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((y) => y % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        })
        it('removes all odd numbers ', function () {
            for (var i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((y) => y >5)
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        })
        it('throws exception ', function () {
            for (var i = 0; i <= 5; i++) {
                sumator.add(i)

            }
            expect(() => sumator.removeByFilter(undefined)).to.throw()
        })
    })
    describe('test to string', function () {
        it('whith items in array', function () {
            sumator.add(4)
            sumator.add("Gosho")
            expect(sumator.toString()).to.be.equal('4, Gosho')

        })
        it('whith items in array', function () {

            expect(sumator.toString()).to.be.equal('(empty)')

        })
    })

})
