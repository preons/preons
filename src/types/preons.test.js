const preons = require("./preons")

describe("Property", () => {
    test("when provided values in new instance, it should set provided properties", () => {
        let values = {
            item: 1,
        }
        let rule = ["abc", "123"]
        let classname = "name"
        let name = "somename"
        let property = new preons.Property({
            values,
            rule,
            classname,
            name,
        })

        expect(property.values).toEqual(values)
        expect(property.rule).toEqual(rule)
        expect(property.class).toEqual(classname)
        expect(property.property).toEqual(name)
    })

    test("when no values are provided in new instance, it should have empty properties", () => {
        let property = new preons.Property({})
        expect(property.values).toEqual({})
        expect(property.rule).toEqual([])
        expect(property.class).toEqual("")
        expect(property.property).toBeUndefined()
    })
})
