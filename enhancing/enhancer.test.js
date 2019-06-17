const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = require('./enhancer')
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({ durability: 100 });
        });
    });

    describe('succeed()', () => {
        it('should enhance the item by 10 if attack power is over 50.', () => {
            const item = {
                name: 'granite maul',
                enhancement: 10,
                attackPower: 51
            }
            const succeed = enhancer.succeed(item)
            expect(succeed.enhancement).toBe(20);
        })
        it('should not enhance because the attack power is below 50', () => {
            const item = {
                name: 'bronze scimitar',
                enhancement: 2,
                attackPower: 10
            }
            const succeed = enhancer.succeed(item)
            expect(succeed.enhancement).toBe(2);
        })
    });
    describe('fail()', () => {
        it('Items lower than 20 attack power will have -1 enhancement.', () => {
            const item = {
                name: 'rune scimitar',
                enhancement: 15,
                attackPower: 19
            };
            const fail = enhancer.fail(item)
            expect(fail.enhancement).toBe(14)
        })
    })

});
