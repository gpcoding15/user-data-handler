const { 
    filterUsersOlderThan24YearsOld, 
    convertNamesToLowerCase, 
    verifyUserExistence, 
    getUsersWithEvenAge, 
    getAgesAverage, 
    greetUser, 
    sortUsersByYoungerAge
} = require("./user-data-handler");

describe("user-data-handler", () => {
    test("should return [{ name: 'Luis', age: 28 }, { name: 'Javier', age: 31 }] when Luis and Javier are older than 25", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 31 },
        ];

        const result = filterUsersOlderThan24YearsOld(users);

        expect(result).toEqual([{ name: 'Luis', age: 28 }, { name: 'Javier', age: 31 }])
    });

    test("should return [{ name: 'Camila', age: 25 }, { name: 'Javier', age: 31 }] when Camila is 25 and Javier is older than 31", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Camila", age: 25 },
            { name: "María", age: 17 },
            { name: "Javier", age: 31 },
        ];

        const result = filterUsersOlderThan24YearsOld(users);

        expect(result).toEqual([{ name: 'Camila', age: 25 }, { name: 'Javier', age: 31 }])
    });

    test("should return an empty array when everybody is younger than 25 years old", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Camila", age: 24 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result = filterUsersOlderThan24YearsOld(users);

        expect(result).toEqual([])
    });

    test("should become all the names to lowercase", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Camila", age: 24 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result =  convertNamesToLowerCase(users);

        expect(result).toEqual(["paula", "camila", "maría", "javier"]);
    });

    test("should return true when Paula is on the records", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Camila", age: 24 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result = verifyUserExistence(users, "Paula");

        expect(result).toBe(true)
    });

    test("should return false when Sabrina is not on the records", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result = verifyUserExistence(users, "Sabrina");

        expect(result).toBe(false)
    });

    test("should return [{ name: 'Paula', age: 22 }, { name: 'Luis', age: 28 }] when they only have even age", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result = getUsersWithEvenAge(users);

        expect(result).toEqual([{ name: 'Paula', age: 22 }, { name: 'Luis', age: 28 }]);
    });

     test("should return an empty list when nobody has even age", () => {
        const users = [
            { name: "Paula", age: 23 },
            { name: "Luis", age: 29 },
            { name: "María", age: 17 },
            { name: "Javier", age: 21 },
        ];

        const result = getUsersWithEvenAge(users);

        expect(result).toEqual([]);
    });

    test("should return 24.5 as average when ages are 22, 28, 17 and 31", () => {
        const users = [
            { name: "Paula", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 31 },
        ];

        const result = getAgesAverage(users);

        expect(result).toBe(24.5)
    });

    test("should display 'Hello Pablo' message when name received is Pablo", () => {
        const users = [
            { name: "Pablo", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 31 },
        ];

        const result = greetUser(users, "Pablo");

        expect(result).toBe("Hello Pablo");
    });

    test("should display 'User not founded' message when name received is Paula and is not on the record", () => {
        const users = [
            { name: "Pablo", age: 22 },
            { name: "Luis", age: 28 },
            { name: "María", age: 17 },
            { name: "Javier", age: 31 },
        ];

        const result = greetUser(users, "Paula");

        expect(result).toBe("User not founded");
    });

    test("should display [{name: 'Maria', age: 17}, {name: 'Pablo', age: 22}] when Maria is younger than Pablo", () => {
        const users = [
            { name: "Pablo", age: 22 },
            { name: "Maria", age: 17 }
        ];

        const result = sortUsersByYoungerAge(users);

        expect(result).toEqual([{name: 'Maria', age: 17}, {name: 'Pablo', age: 22}]);
    })

})