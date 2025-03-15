import sum from "../components/sum";

test("should return of sum of two number", () => {
    let result = sum(12, 14);
    expect(result).toBe(26);
});


// it(" sum function should return of sum of two number", () => {
//     let result = sum(12, 14);
//     expect(result).toBe(26);
// });


// in place of test, you can use it, it is just alias no any difference