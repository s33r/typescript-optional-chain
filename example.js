export function example() {
    const test = {
        option: { value: 5 },
    };
    (test?.option).value = 5;
    console.log(test);
}
example();
